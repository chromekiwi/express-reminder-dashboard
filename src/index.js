import app from "./app.js";
import { connect } from "./db/atlas.js";

const port = process.env.PORT || 3000;

connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Your server is running! 🎉`);
    });
  })
  .catch((error) => {
    console.error("Failed to start server...", error);
  });
