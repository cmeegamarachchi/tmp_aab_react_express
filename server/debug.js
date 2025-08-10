const h = require("./api/handlers/users/index.js");
console.log("Raw handler:", h);
console.log("Type:", typeof h);
console.log("IsArray:", Array.isArray(h));
console.log("Constructor:", h.constructor.name);
console.log("Length:", h.length);
console.log("First item:", h[0]);
