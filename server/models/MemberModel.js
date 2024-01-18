
const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  MemberID: { type: Number, required: true, unique: true },
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Email: { type: String, required: true },
  PhoneNumber: { type: String, required: true },
  BirthDate: { type: Date, required: true },
  JoinDate: { type: Date, required: true },
  MembershipID: { type: Number, required: true },
});

const MemberModel = mongoose.model('Member', memberSchema);

module.exports = MemberModel;
