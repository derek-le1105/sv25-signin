const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const { getEntry, createEntry } = require("../controllers/entryController");

const router = express.Router();

router.post("/login", createEntry);

router.use(requireAuth);

router.get("/", getEntry);

module.exports = router;
