
const express = require('express');
const mongoose = require('mongoose');
const memberRoutes = require('./routes/memberRoutes');
const membershipRoutes = require('./routes/membershipRoutes');
const classRoutes = require('./routes/classRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const equipmentRoutes = require('./routes/equipmentRoutes');

const app = express();
const PORT = process.env.PORT || 8000;

mongoose.connect('mongodb://localhost:27017/swasthyasevak', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());


app.use('/members', memberRoutes);
app.use('/membership', membershipRoutes);
app.use('/class', classRoutes);
app.use('/attendance', attendanceRoutes);
app.use('/paymentgateway', paymentRoutes);
app.use('/equipment', equipmentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
