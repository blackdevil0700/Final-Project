import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  verified: { type: Boolean, default: false },
  token: String
});

export default mongoose.model("Lead", leadSchema);
