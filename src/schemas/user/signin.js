import { z } from "zod";
import { en } from "../../lib/languages/en.js";
import { user } from "../../lib/forms/user.js";

export const formSchema = z.object({
  email: z
    .string({ required_error: en.email.string })
    .min(1, { message: en.email.string })
    .max(user.EMAIL_MAX, { message: en.email.max })
    .email({ message: en.email.email }),
  password: z
    .string({ required_error: en.password.string })
    .min(1, { message: en.password.string })
    .max(user.PASSWORD_MAX, { message: en.password.max }),
});
