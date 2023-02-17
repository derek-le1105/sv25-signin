const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentModel = new Schema({
  student_id: { type: String, required: true },
});

module.exports = mongoose.model("Student", studentModel);
