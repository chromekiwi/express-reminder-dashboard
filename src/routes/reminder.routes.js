import express from "express";
import {
  createReminder,
  getReminder,
  getReminders,
  updateReminder,
  deleteReminder,
} from "../services/reminder.js";
import { validate } from "../middleware/schema.js";
import { formSchema } from "../schemas/reminder.js";
import { evalToken } from "../auth/jwt.js";

const router = express.Router();

router.post("/reminders", evalToken, validate(formSchema), createReminder);
router.get("/reminders", evalToken, getReminders);
router.get("/reminders/:id", evalToken, getReminder);
router.patch("/reminders/:id", evalToken, validate(formSchema), updateReminder);
router.delete("/reminders/:id", evalToken, deleteReminder);

export default router;
