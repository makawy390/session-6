const express = require('express');
const app = express();

const mongoose = require('mongoose');
const url = 'mongodb+srv://moohesham83:mekawy_1008@learn-mongo-db.6c2lb.mongodb.net/codeZone';

// Handel for body Json
app.use(express.json()); 
const port = 3000;
const coursesrouter = require('./routes/router.data')
const api = "/api/courses";

app.use(api , coursesrouter);

mongoose.connect(url).then(()=>{
    console.log("mongodb setver start");
    
})
app.listen(port, ()=>{
    console.log(`server running from port ${port}`);
    
})
