import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a username"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: [true, "Email must be unique"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6,
  },
});
const User = mongoose.model("User", UserSchema);
export default User;
