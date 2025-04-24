const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const Feedback = require("../models/Feedback");

const router = express.Router();

// GET: Fetch all feedback
router.get("/", async (req, res) => {
  try {
    const feedback = await Feedback.find().populate("user", "name email");
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// POST: Submit feedback
router.post("/", protect, async (req, res) => {
  try {
    const newFeedback = new Feedback({ ...req.body, user: req.user.id });
    await newFeedback.save();
    res.status(201).json({ message: "Feedback submitted successfully", feedback: newFeedback });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// PUT: Update feedback
router.put("/:id", protect, async (req, res) => {
  try {
    const updatedFeedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedFeedback) return res.status(404).json({ message: "Feedback not found" });
    res.json({ message: "Feedback updated successfully", feedback: updatedFeedback });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;