import express from "express";
const app = express();
import dotenv from "dotenv";
import Database from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import UserRouter from "./routes/User.js";
dotenv.config();

Database();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Accept",
    ],
  })
);

app.use(cookieParser());
app.use("/api/users", UserRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is connected to port: ${PORT}`));
