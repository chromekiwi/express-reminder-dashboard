import { z } from "zod";
import { en } from "../lib/languages/en.js";
import { profile } from "../lib/forms/profile.js";

export const formSchema = z.object({
  firstName: z
    .string({ required_error: en.firstName.string })
    .min(profile.FIRST_NAME_MIN, { message: en.firstName.min })
    .max(profile.FIRST_NAME_MAX, { message: en.firstName.max }),
  lastName: z
    .string({ required_error: en.lastName.string })
    .min(profile.LAST_NAME_MIN, { message: en.lastName.min })
    .max(profile.LAST_NAME_MAX, { message: en.lastName.max }),
});
