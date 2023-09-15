import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    user: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
  },
  { timestamps: true }
);

// Create and export the User model
const User = mongoose.model("User", UserSchema);

export default User;
