const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8324;
const FRONTEND_DIST = process.env.FRONTEND_DIST || "../frontend";

// Import CORS middleware
const corsMiddleware = require("./api/middleware/cors");

// Apply CORS middleware
app.use(corsMiddleware);

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/api", require("./api/routes"));

// Serve static files from frontend distribution folder
app.use(express.static(path.resolve(__dirname, FRONTEND_DIST)));

// Catch-all handler: send back frontend's index.html file for SPA routing
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, FRONTEND_DIST, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Frontend served from: ${path.resolve(__dirname, FRONTEND_DIST)}`);
});
