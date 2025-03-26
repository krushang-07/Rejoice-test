export const sendSuccess = (res, message, data = {}) => {
  res.status(200).json({ success: true, message, ...data });
};

export const sendError = (res, statusCode, message) => {
  res.status(statusCode).json({ success: false, message });
};
