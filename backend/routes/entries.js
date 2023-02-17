const express = require("express");
const { getEntry, createEntry } = require("../controllers/entryController");

const router = express.Router();

router.get("/", getEntry);

router.post("/login", createEntry);

module.exports = router;
