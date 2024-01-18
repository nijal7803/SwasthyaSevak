const express = require("express");
const router = express.Router();
const MemberModel = require("../models/MemberModel");

router.get("/members", async (req, res) => {
  try {
    const members = await MemberModel.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/members", async (req, res) => {
  const newMemberData = req.body;

  try {
    const newMember = new MemberModel(newMemberData);

    await newMember.save();

    res.status(201).json(newMember);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
