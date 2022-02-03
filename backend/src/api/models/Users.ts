import mongoose from "mongoose";

const skills = [{ name: String, count: Number }];
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  skills: [skills],
});

export const UserModel = mongoose.model("users", UserSchema);
