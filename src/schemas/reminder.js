import { z } from "zod";
import { en } from "../lib/languages/en.js";
import { reminder } from "../lib/forms/reminder.js";

export const formSchema = z.object({
  title: z
    .string({ required_error: en.title.string })
    .min(reminder.TITLE_MIN, { message: en.title.min })
    .max(reminder.TITLE_MAX, { message: en.title.max }),
  description: z
    .string({ required_error: en.description.string })
    .min(reminder.DESCRIPTION_MIN, { message: en.description.min })
    .max(reminder.DESCRIPTION_MAX, { message: en.description.max }),
  date: z.string().datetime({ message: en.date.date }).optional(),
});
