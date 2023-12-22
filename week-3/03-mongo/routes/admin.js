const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;

  res.set({
    username: username,
    password: password,
  });

  const admin = await Admin.create({ username, password });
  res.status(200).json({
    msg: "Admin created successfully",
    admin,
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic

  const { title, description, price, imageLink } = req.body;

  const course = await Course.create({ title, description, price, imageLink });

  res.status(201).json({
    msg: "Course created successfully",
    courseId: course._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic

  const course = await Course.find();

  res.status(200).json({
    course,
  });
});

module.exports = router;
