import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const Database = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.log("failed to connect db", err));
};

export default Database;
