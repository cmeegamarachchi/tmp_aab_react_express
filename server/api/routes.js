const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// Dynamically load all handler modules
const handlersDir = path.join(__dirname, "handlers");

if (fs.existsSync(handlersDir)) {
  const handlerFiles = fs.readdirSync(handlersDir).filter((file) => file.endsWith(".js") && !file.startsWith("."));

  handlerFiles.forEach((file) => {
    const handlerPath = path.join(handlersDir, file);
    const handler = require(handlerPath);

    if (handler.route && handler.method && handler.handler) {
      router[handler.method.toLowerCase()](handler.route, handler.handler);
      console.log(`Loaded API route: ${handler.method.toUpperCase()} ${handler.route}`);
    }
  });
}

// Health check endpoint
router.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

module.exports = router;
