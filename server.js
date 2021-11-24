const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');
const mongoose = require('mongoose');


app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://attendance:attend@cluster0.qrdb5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => console.log("Mongo Database successfully connected"))
.catch(err => console.log(err));

app.use('/', require('./routes/route'));

app.listen(port,() =>{
    console.log('Connected successfully');
});