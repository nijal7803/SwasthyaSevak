
const express = require('express');
const router = express.Router();
const PaymentModel = require('../models/PaymentModel');

router.get('/payments', async (req, res) => {
  try {
    const paymentRecords = await PaymentModel.find();
    res.json(paymentRecords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
