const express = require("express");
const {
  getStudent,
  createStudent,
} = require("../controllers/studentController");
const router = express.Router();

router.get("/:id", getStudent);

router.post("/create", createStudent);

module.exports = router;
