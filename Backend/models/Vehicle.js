const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    location: { type: String, required: true },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    images: [{ type: String }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vehicle", vehicleSchema);
