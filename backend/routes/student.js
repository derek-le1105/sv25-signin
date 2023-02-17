const express = require("express");
const {
  getStudent,
  createStudent,
} = require("../controllers/studentController");
const router = express.Router();

router.get("/", getStudent);

router.post("/", createStudent);

module.exports = router;
