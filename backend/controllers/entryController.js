const Entry = require("../models/entryModel");
const mongoose = require("mongoose");

const getEntry = async (req, res) => {
  const page = req.query.page;
  const limit = 20;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const entries = await Entry.find({})
    .sort({ createdAt: -1 })
    .skip(startIndex)
    .limit(limit);
  console.log(entries);
  res.status(200).json(entries);
};

const createEntry = async (req, res) => {
  const { student_id, name, reason, professor } = req.body;

  let emptyFields = [];

  if (!student_id) emptyFields.push("student_id");
  if (!name) emptyFields.push("name");
  if (!reason) emptyFields.push("reason");
  if (!professor) emptyFields.push("professor");

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill all the fields", emptyFields });
  }

  try {
    const entry = await Entry.create({
      student_id,
      name,
      reason,
      professor,
    });
    res.status(200).json(entry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getEntry, createEntry };
