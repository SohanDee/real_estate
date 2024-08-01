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

App.listen(3000, ()=>{
    console.log("App is running on port 3001")
})

App.use(express.json())
App.use('/api', routes)

App.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})