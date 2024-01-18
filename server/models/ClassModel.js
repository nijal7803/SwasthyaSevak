
const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  ClassID: { type: Number, required: true, unique: true },
  ClassName: { type: String, required: true },
  Instructor: { type: String, required: true },
  Schedule: { type: String, required: true },
  Capacity: { type: Number, required: true },
});

const ClassModel = mongoose.model('FitnessClass', classSchema);

module.exports = ClassModel;
