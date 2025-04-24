const express = require('express');
const cors = require('cors');
// const connectDB = require('./db');
// const authRoutes = require('./routes/authRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const feedbackRoutes = require('./routes/Feedbackroutes'); // Added feedback routes
const userRoutes = require('./routes/Userroutes'); // Added user routes
const connectDB = require('./db');
// require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// app.use('/api/auth', authRoutes);
app.use('/api/vehicles', vehicleRoutes); // Vehicle routes
app.use('/api/feedback', feedbackRoutes); // Feedback routes
app.use('/api/users', userRoutes); // User routes

// Connect to Database and Start Server
const url = process.env.db_uri;
const port =  5000; // Default to 5000 if PORT is not set
require('dotenv').config();
app.listen(port, async () => {
  try {
      await connectDB(url);
      console.log(`Server is running on port:${port} Link: http://localhost:${port}`);
  } catch (err) {
      console.log(err);
  }
});