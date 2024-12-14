import { code } from "../lib/utils.js";
import { en } from "../lib/languages/en.js";
import User from "../models/user.js";
import Reminder from "../models/reminder.js";

export const createReminder = async (req, res) => {
  const { title, description, date, user } = req.body;

  try {
    const userDocument = await User.findById(user);

    if (!userDocument) {
      return res.status(code.NOT_FOUND).json([en.user.error]);
    }

    const reminder = new Reminder({
      title,
      description,
      date,
      user: userDocument._id,
    });
    const reminderDocument = await reminder.save();
    res.status(code.CREATED).json(reminderDocument._doc);
  } catch (error) {
    res.status(code.INTERNAL_SERVER_ERROR).json(error);
  }
};

export const getReminder = async (req, res) => {
  const { id } = req.params;

  try {
    const reminder = await Reminder.findOne({ _id: id });

    if (!reminder) {
      return res.status(code.NOT_FOUND).json([en.reminder.error]);
    }

    res.status(code.OK).json(reminder._doc);
  } catch (error) {
    res.status(code.INTERNAL_SERVER_ERROR).json([en.internalServerError]);
  }
};

export const getReminders = async (req, res) => {
  const userId = req.user.id;

  try {
    const reminders = await Reminder.find({ user: userId });
    res.status(code.OK).json(reminders._doc);
  } catch (error) {
    res.status(code.INTERNAL_SERVER_ERROR).json([en.internalServerError]);
  }
};

export const updateReminder = async (req, res) => {
  const { id } = req.params;
  const { title, description, date, user } = req.body;

  const userDocument = User.findById(user);

  if (!userDocument) {
    return res.status(code.NOT_FOUND).json([en.user.error]);
  }

  try {
    const reminder = await Reminder.findOneAndUpdate(
      { _id: id, user: userDocument._id },
      { title, description, date },
      { new: true }
    );

    if (!reminder) {
      return res.status(code.NOT_FOUND).json([en.reminder.error]);
    }

    res.status(code.OK).json(reminder._doc);
  } catch (error) {
    res.status(code.INTERNAL_SERVER_ERROR).json([en.internalServerError]);
  }
};

export const deleteReminder = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const reminder = await Reminder.findOneAndDelete({ _id: id, user: userId });

    if (!reminder) {
      return res.status(code.NOT_FOUND).json([en.reminder.error]);
    }

    res.sendStatus(code.NO_CONTENT);
  } catch (error) {
    res.status(code.INTERNAL_SERVER_ERROR).json([en.internalServerError]);
  }
};
