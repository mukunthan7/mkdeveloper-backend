import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: ["Username is required !"],
    },
    email: {
      type: String,
      required: ["Email is required !"],
    },
    password: {
      type: String,
      required: ["Password is required !"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
