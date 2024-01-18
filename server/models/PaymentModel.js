
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  PaymentID: { type: Number, required: true, unique: true },
  MemberID: { type: Number, required: true },
  Amount: { type: Number, required: true },
  PaymentDate: { type: Date, required: true },
});

const PaymentModel = mongoose.model('Payment', paymentSchema);

module.exports = PaymentModel;
