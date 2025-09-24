import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
    unique: [true, "Username already exists"],
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email already exists"],
    lowercase: true,
    match: [/.+@.+\..+/, "Please fill a valid email address"],
  },
  password: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("User", userSchema);
export default User;
