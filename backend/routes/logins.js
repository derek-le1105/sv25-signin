const express = require("express");
const { getLogin, createLogin } = require("../controllers/loginController");

const router = express.Router();

router.get("/", getLogin);

router.post("/", createLogin);

module.exports = router;
