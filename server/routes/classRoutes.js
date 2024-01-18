
const express = require('express');
const router = express.Router();
const ClassModel = require('../models/ClassModel');


router.get('/classes', async (req, res) => {
  try {
    const classes = await ClassModel.find();
    res.json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



module.exports = router;
