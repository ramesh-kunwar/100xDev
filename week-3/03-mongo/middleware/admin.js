const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  const { username, password } = req.headers;

  if (username !== "admin" || password !== "admin") {
    res.status(200).json({ msg: "Not authorized as admin" });
  }

  next();
}

module.exports = adminMiddleware;
