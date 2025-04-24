const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const Vehicle = require("../models/Vehicle");

const router = express.Router();

// GET: Fetch all vehicles
router.get("/", async (req, res) => {
  try {
    const vehicles = await Vehicle.find().populate("seller", "name email");
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// POST: Add a new vehicle (without auth for now)
router.post("/", async (req, res) => {
  try {
    // Replace this with a real ObjectId from your users collection
    const defaultSellerId = "6619f05e0fa835c3b3f94e01"; 

    const newVehicle = new Vehicle({ ...req.body, seller: defaultSellerId });
    await newVehicle.save();

    res.status(201).json({ message: "Vehicle added successfully", vehicle: newVehicle });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});



// PUT: Update vehicle details
router.put("/:id", async (req, res) => {
  try {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedVehicle) return res.status(404).json({ message: "Vehicle not found" });
    res.json({ message: "Vehicle updated successfully", vehicle: updatedVehicle });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;