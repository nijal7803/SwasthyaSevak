
const express = require('express');
const router = express.Router();
const EquipmentModel = require('../models/EquipmentModel');


router.get('/equipment', async (req, res) => {
  try {
    const equipmentRecords = await EquipmentModel.find();
    res.json(equipmentRecords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



module.exports = router;
