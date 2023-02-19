const Admin = require("../models/adminModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login user
const loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  console.log("here");
  try {
    const user = await Admin.login(username, password);

    //create a token
    const token = createToken(user._id);

    res.status(200).json({ username, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginAdmin };
