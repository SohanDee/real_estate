const express = require('express')

const App = express();

App.listen(3001, ()=>{
    console.log("App is running on port 3001!!!")
})