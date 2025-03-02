const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5500;

// Middleware
app.use(express.json());  // Parse JSON data
app.use(cors({ origin: '*', credentials: true }));  // Allow all origins (modify if needed)

// Import Routes
const TodoItemRoute = require('./routes/todoItems');

// Root route for testing
app.get('/', (req, res) => {
  console.log("Server is running!");
  res.send('Hello from Render Deployment! 🚀'); 
});

// MongoDB Connection
mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Database connected successfully!"))
.catch(err => console.error("❌ Database connection error:", err));

// Use Routes
app.use('/', TodoItemRoute);

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on PORT ${PORT}`));
