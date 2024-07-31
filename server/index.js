const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routes = require('./routes/index')

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

App.use(express.json())

App.use('/', routes)