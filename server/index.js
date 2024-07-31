const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to Database")
}).catch((err)=>{
    console.log(err)
})

const App = express();

App.listen(3001, ()=>{
    console.log("App is running on port 3001")
})