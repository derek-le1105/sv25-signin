const express = require("express");
const { getEntry, createEntry } = require("../controllers/entryController");

const router = express.Router();

router.get("/", getEntry);

router.post("/", createEntry);

module.exports = router;
