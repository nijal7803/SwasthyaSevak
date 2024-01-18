
const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
  EquipmentID: { type: Number, required: true, unique: true },
  Name: { type: String, required: true },
  Status: { type: String, required: true },
});

const EquipmentModel = mongoose.model('Equipment', equipmentSchema);

module.exports = EquipmentModel;
