const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const home  = require('./routes/home');


const app  = express();
const port = process.env.PORT || 5000;
//middleware json 
app.use(bodyParser.json())

app.listen(port, (err)=>{
  if(err){console.log(err)}else{
    console.log(`listening on port ${port} accepting json`)
  }
})

app.use("/", home)
