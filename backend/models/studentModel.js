const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentModel = new Schema({
  student_id: { type: String, required: true },
  name: { type: String, required: true },
  professors: { type: Array, required: true },
});

studentModel.statics.getStudent = async function ({ id }) {
  if (id === "null") throw Error("ID must be filled please");
  const student = await this.findOne({ student_id: id });
  return student;
};

module.exports = mongoose.model("Student", studentModel);
