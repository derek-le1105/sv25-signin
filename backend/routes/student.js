const express = require("express");
const {
  getStudent,
  createStudent,
} = require("../controllers/studentController");
const router = express.Router();

router.get("/:id", getStudent);

router.post("/login", createStudent);

module.exports = router;
