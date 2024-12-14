import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { code } from "../lib/utils.js";
import { genToken } from "../auth/jwt.js";
import { en } from "../lib/languages/en.js";
import User from "../models/user.js";
import Profile from "../models/profile.js";

const secret = process.env.KEY;

export const signup = async (req, res) => {
  const { username, email, password, firstName, lastName } = req.body;

  try {
    const dummy = await User.findOne({ username, email });

    if (dummy) {
      return res
        .status(code.CONFLICT)
        .json(["Username or email already exists..."]);
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = new User({
      username,
      email,
      password: hash,
    });
    const userDocument = await user.save();

    const profile = new Profile({
      user: user._id,
      firstName,
      lastName,
    });
    const profileDocument = await profile.save();

    const token = await genToken({ id: userDocument._id });
    res.cookie("token", token);
    res
      .status(code.CREATED)
      .json(Object.assign({}, userDocument._doc, profileDocument._doc));
  } catch (error) {
    res.status(code.INTERNAL_SERVER_ERROR).json([en.internalServerError]);
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(code.NOT_FOUND).json(["User not found..."]);
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res
        .status(code.UNAUTHORIZED)
        .json(["Email or password is invalid..."]);
    }

    const profile = await Profile.findOne({ user: user._id });

    const token = await genToken({ id: user._id });
    res.cookie("token", token);
    res.status(code.OK).json(Object.assign({}, user._doc, profile._doc));
  } catch (error) {
    res.status(code.INTERNAL_SERVER_ERROR).json([en.internalServerError]);
  }
};

export const signout = async (req, res) => {
  try {
    res.cookie("token", "", { expires: new Date(0) });
    return res.sendStatus(code.NO_CONTENT);
  } catch (error) {
    res.status(code.INTERNAL_SERVER_ERROR).json([en.internalServerError]);
  }
};

export const getUser = async (req, res) => {
  const { token } = req.cookies;

  try {
    if (!token) return res.status(code.UNAUTHORIZED).json([en.unauthorized]);

    jwt.verify(token, secret, async (error, user) => {
      if (error) return res.status(code.UNAUTHORIZED).json([en.unauthorized]);

      const userDocument = await User.findById(user.id);

      if (!userDocument)
        return res.status(code.UNAUTHORIZED).json([en.unauthorized]);

      const profile = await Profile.findOne({ user: userDocument._id });

      return res
        .status(code.OK)
        .json(Object.assign({}, userDocument._doc, profile._doc));
    });
  } catch (error) {
    res.status(code.INTERNAL_SERVER_ERROR).json([en.internalServerError]);
  }
};
