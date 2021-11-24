const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    matricNo:  {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default : new Date()
    }
});

const Attendance = mongoose.model("Attendee", attendanceSchema);

module.exports = Attendance;