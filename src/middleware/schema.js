import { code } from "../lib/utils.js";

export const validate = (schema) => (req, res, callback) => {
  try {
    schema.parse(req.body);
    callback();
  } catch (error) {
    return res
      .status(code.BAD_REQUEST)
      .json(error.errors.map((e) => e.message));
  }
};
