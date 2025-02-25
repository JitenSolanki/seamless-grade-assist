const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;  // Change this to your desired port

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/examGradingSystem")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);  // Exit the process if MongoDB connection fails
  });

// Routes
const examRoutes = require("./routes/examRoutes");
app.use("/api/exams", examRoutes);

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// aa file atlij chhe ?
// haa