import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { handleError } from "../utils/errorHandler.js";
import { sendError } from "../utils/responsehandler.js";

export const auth = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return sendError(res, 401, "Unauthorized");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return sendError(res, 401, "Unauthorized");
    }
    req.user = user;
    next();
  } catch (error) {
    handleError(res, error);
  }
};
