
const express = require('express');
const router = express.Router();
const MembershipModel = require('../models/MembershipModel');


router.get('/memberships', async (req, res) => {
  try {
    const memberships = await MembershipModel.find();
    res.json(memberships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



module.exports = router;
