const dotenv = require('dotenv')
dotenv.config();
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
require('./model/config')

app.use(express.json());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Hi i am nisha")
})

app.listen(3000,(req,res)=>{
    console.log('this server is running on port: 3000')
})