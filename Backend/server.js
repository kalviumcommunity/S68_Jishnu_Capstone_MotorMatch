const express = require('express');
const cors = require('cors');
const vehicleRoutes = require('./routes/vehicleRoutes');
const feedbackRoutes = require('./routes/Feedbackroutes');
const userRoutes = require('./routes/Userroutes');
const connectDB = require('./db');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Middleware to handle invalid JSON format
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('Bad JSON:', err.message);
    return res.status(400).json({ error: 'Invalid JSON format' });
  }
  next();
});

// Routes
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/users', userRoutes);

// Connect to Database and Start Server
const url = process.env.db_uri;
const port = 5000;

app.get('/', (req, res) => {
  res.send('Welcome to the MotorMatch API!');
});

app.listen(port, async () => {
  try {
    await connectDB(url);
    console.log(`Server is running on port:${port} Link: http://localhost:${port}`);
  } catch (err) {
    console.log(err);
  }
});
 
