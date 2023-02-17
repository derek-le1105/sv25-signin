const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentModel = new Schema({
  student_id: { type: String, required: true },
  name: { type: String, required: true },
  professors: { type: Array, required: true },
});

module.exports = mongoose.model("Student", studentModel);
