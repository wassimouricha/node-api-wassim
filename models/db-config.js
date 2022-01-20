const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/node-api-wassim",
    {useNewUrlParser:true, useUNifiedTopology: true},
    (err) => {
        if(!err) console.log("Mongodb connected");
        else console.log("connection error : " + err);
    }
);