
const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
  MembershipID: { type: Number, required: true, unique: true },
  PlanName: { type: String, required: true },
  DurationMonths: { type: Number, required: true },
  MonthlyFee: { type: Number, required: true },
});

const MembershipModel = mongoose.model('Membership', membershipSchema);

module.exports = MembershipModel;
