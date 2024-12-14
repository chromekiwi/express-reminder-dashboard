import jwt from "jsonwebtoken";
import { code } from "../lib/utils.js";
import { en } from "../lib/languages/en.js";

const secret = process.env.KEY;

export const genToken = async (data) => {
  try {
    const token = jwt.sign(data, secret, { expiresIn: "2h" });
    return token;
  } catch (error) {
    throw error;
  }
};

export const evalToken = async (req, res, callback) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(code.FORBIDDEN).json([en.forbidden]);
  }

  try {
    const data = jwt.verify(token, secret);
    req.user = data;
    callback();
  } catch (error) {
    return res.status(code.FORBIDDEN).json([en.forbidden]);
  }
};
