const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// Dynamically load all handler modules
const handlersDir = path.join(__dirname, "handlers");

if (fs.existsSync(handlersDir)) {
  const handlerItems = fs.readdirSync(handlersDir).filter((item) => !item.startsWith("."));

  handlerItems.forEach((item) => {
    const itemPath = path.join(handlersDir, item);
    const stats = fs.statSync(itemPath);

    let handler;
    if (stats.isDirectory()) {
      // Load index.js from the directory
      const indexPath = path.join(itemPath, "index.js");
      if (fs.existsSync(indexPath)) {
        handler = require(indexPath);
      }
    } else if (item.endsWith(".js")) {
      // Load .js file directly (for backward compatibility)
      handler = require(itemPath);
    }

    if (handler) {
      // Handle both single handler objects and arrays of handlers
      const handlers = Array.isArray(handler) ? handler : [handler];

      handlers.forEach((h) => {
        if (h && h.route && h.method && h.handler) {
          router[h.method.toLowerCase()](h.route, h.handler);
          console.log(`Loaded API route: ${h.method.toUpperCase()} ${h.route}`);
        }
      });
    }
  });
}

// Health check endpoint
router.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

module.exports = router;
