const Student = require("../models/studentModel");
const mongoose = require("mongoose");

const getStudent = async (req, res) => {
  const student = await Student.find({}).sort({ created_at: -1 });

  res.status(200).json(student);
};

const createStudent = async (req, res) => {
  const { student_id, name, professors } = req.body;
  let emptyFields = [];

  if (!student_id) emptyFields.push("student_id");
  if (!name) emptyFields.push("name");
  if (!professors) emptyFields.push("professors");

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill all the fields", emptyFields });
  }

  try {
    const student = await Student.create({
      student_id,
      name,
      professors,
    });
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getStudent,
  createStudent,
};
