import { profile } from "../forms/profile.js";
import { user } from "../forms/user.js";
import { reminder } from "../forms/reminder.js";

export const en = {
  firstName: {
    string: "First name is required.",
    min: `First name must be at least ${profile.FIRST_NAME_MIN} characters.`,
    max: `First name must be at most ${profile.FIRST_NAME_MAX} characters.`,
    regex: "First name must include only letters.",
  },
  lastName: {
    string: "Last name is required.",
    min: `First name must be at least ${profile.LAST_NAME_MIN} characters.`,
    max: `First name must be at most ${profile.LAST_NAME_MAX} characters.`,
    regex: "Last name must include only letters.",
  },
  username: {
    string: "Username is required.",
    min: `Username must be at least ${user.USERNAME_MIN} characters.`,
    max: `Username must be at most ${user.USERNAME_MAX} characters.`,
    unique: "Username is already taken.",
  },
  email: {
    string: "Email is required.",
    unique: "Email is already taken.",
    min: `Email must be at least ${user.EMAIL_MIN} characters.`,
    max: `Email must be at most ${user.EMAIL_MAX} characters.`,
    email: "Email is invalid.",
  },
  password: {
    string: "Password is required.",
    min: `Password must be at least ${user.PASSWORD_MIN} characters.`,
    max: `Password must be at most ${user.PASSWORD_MAX} characters.`,
    regex: "Password must include a number, letters, and a special character.",
  },
  title: {
    string: "Title is required.",
    min: `Title must be at least ${reminder.TITLE_MIN} characters.`,
    max: `Title must be at most ${reminder.TITLE_MAX} characters.`,
  },
  description: {
    string: "Description is required.",
    min: `Description must be at least ${reminder.DESCRIPTION_MIN} characters.`,
    max: `Description must be at most ${reminder.DESCRIPTION_MAX} characters.`,
  },
  date: {
    string: "Date is required.",
    date: "Date is invalid.",
  },
  user: {
    string: "User is required.",
    error: "User not found.",
  },
  reminder: {
    string: "Reminder is required.",
    error: "Reminder not found.",
  },
  forbidden: "You are not allowed to access this resource...",
  unauthorized: "You are not authorized to access this resource...",
  internalServerError: "Something went wrong...",
};
