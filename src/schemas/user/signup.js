import { z } from "zod";
import { en } from "../../lib/languages/en.js";
import { user } from "../../lib/forms/user.js";

export const formSchema = z.object({
  username: z
    .string({ message: en.username.string })
    .min(user.USERNAME_MIN, { message: en.username.min })
    .max(user.USERNAME_MAX, { message: en.username.max }),
  email: z
    .string({ message: en.email.string })
    .min(user.EMAIL_MIN, { message: en.email.min })
    .max(user.EMAIL_MAX, { message: en.email.max })
    .email({ message: en.email.email }),
  password: z
    .string({ message: en.password.string })
    .min(user.PASSWORD_MIN, { message: en.password.min })
    .max(user.PASSWORD_MAX, { message: en.password.max })
    .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
      message: en.password.regex,
    }),
});
