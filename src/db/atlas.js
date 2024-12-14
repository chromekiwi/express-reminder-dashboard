import mongoose from "mongoose";

const uri = process.env.DATABASE_URL;

export const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log(
      "Pinged your deployment. You successfully connected to the database! 🚀"
    );
  } catch (error) {
    console.log("You couldn't connect to the database...");
  }
};
