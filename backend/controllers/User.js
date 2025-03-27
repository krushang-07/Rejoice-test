import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { handleError } from "../utils/errorHandler.js";
import { sendSuccess, sendError } from "../utils/responsehandler.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return sendError(res, 400, "Please provide all required fields");
    }

    const user = await User.findOne({ email });
    if (user) {
      return sendError(res, 400, "User already exists");
    }

    if (password.length < 6) {
      return sendError(res, 400, "Password must be at least 6 characters");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return sendSuccess(res, "User registered successfully", { user: newUser });
  } catch (error) {
    console.error("Registration error:", error);
    handleError(res, error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return sendError(res, 400, "Please enter all fields");
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return sendError(res, 400, "Invalid User");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return sendError(res, 400, "Incorrect Password");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return sendSuccess(res, "Login successful", { token });
  } catch (error) {
    handleError(res, error);
  }
};
