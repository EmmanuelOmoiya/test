const express = require('express');
const router = express.Router();
const Attendance = require('../Models/Attendance');

router.route('/attendance').post((req, res)=>{
    const newAttendance = new Attendance({
        name : req.body.name,
        matricNo : req.body.matricNo
    });

    newAttendance.save()
    .then(data=>{
        res.json(data)
    }).catch(error=>{
        res.json(error)
    });
});

router.get('/',(req, res)=>{
    res.send('<h1 style=margin-left:34vw;, font-family: sans-serif;>Hello there \\{^_^}/ Attendee<h1/>');
})

router.route('/attendance').get((req, res)=>{
    Attendance.find()
        .then(foundAttendance => res.json(foundAttendance))
});

module.exports = router;