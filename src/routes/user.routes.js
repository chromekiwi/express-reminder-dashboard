import { Router } from "express";
import { signup, signin, signout, getUser } from "../services/user.js";
import { validate } from "../middleware/schema.js";
import { formSchema as signUpSchema } from "../schemas/user/signup.js";
import { formSchema as signInSchema } from "../schemas/user/signin.js";

const router = Router();

router.post("/signup", validate(signUpSchema), signup);

router.post("/signin", validate(signInSchema), signin);

router.post("/signout", signout);

router.get("/verify", getUser);

export default router;
