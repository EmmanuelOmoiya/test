const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    name : String,
    matricNo: String,
    createdAt: {
        type: Date,
        default : new Date()
    }
});

const Attendance = mongoose.model("Attendee", attendanceSchema);

module.exports = Attendance;