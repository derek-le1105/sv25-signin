const Login = require("../models/loginModel");
const mongoose = require("mongoose");

const getLogin = async (req, res) => {
  const logins = await Login.find({}).sort({ createdAt: -1 });

  res.status(200).json(logins);
};

const createLogin = async (req, res) => {
  const { idNumber, name, reason, professor } = req.body;

  let emptyFields = [];

  if (!idNumber) emptyFields.push("idNumber");
  if (!name) emptyFields.push("name");
  if (!reason) emptyFields.push("reason");
  if (!professor) emptyFields.push("professor");

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill all the fields", emptyFields });
  }

  try {
    const login = await Login.create({ idNumber, name, reason, professor });
    res.status(200).json(login);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getLogin, createLogin };
