
const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  AttendanceID: { type: Number, required: true, unique: true },
  MemberID: { type: Number, required: true },
  ClassID: { type: Number, required: true },
  AttendanceDate: { type: Date, required: true },
});

const AttendanceModel = mongoose.model('Attendance', attendanceSchema);

module.exports = AttendanceModel;
