import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookie from "cookie-parser";
import { code } from "./lib/utils.js";

import user from "./routes/user.routes.js";
import reminder from "./routes/reminder.routes.js";

const app = express();
app.use(cors({ origin: "*", credentials: true }));
app.use(morgan("dev"));
app.use(cookie());
app.use(express.json());

app.get("/api/v1", (req, res) => {
  return res.status(code.OK).json("Hello, world!");
});

app.use("/api/v1", user);
app.use("/api/v1", reminder);

app.use((req, res) => {
  return res
    .status(code.NOT_FOUND)
    .json(["The resource you are looking for does not exist..."]);
});

export default app;
