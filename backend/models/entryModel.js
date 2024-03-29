const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entryModel = new Schema(
  {
    student_id: { type: String, required: true },
    name: { type: String, required: true },
    reason: { type: String, required: true },
    professor: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Entry", entryModel);
