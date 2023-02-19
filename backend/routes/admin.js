const express = require("express");
const { loginAdmin } = require("../controllers/adminController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

//router.use(requireAuth);

//router.get("/", getAdmin);

router.post("/login", loginAdmin);

module.exports = router;
