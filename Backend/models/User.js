// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false }, // Hide password by default
  profilePicture: { type: String, default: "" },
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Vehicle" }],
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
