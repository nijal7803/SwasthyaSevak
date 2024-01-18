
const express = require('express');
const router = express.Router();
const AttendanceModel = require('../models/AttendanceModel');


router.get('/attendance', async (req, res) => {
  try {
    const attendanceRecords = await AttendanceModel.find();
    res.json(attendanceRecords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
