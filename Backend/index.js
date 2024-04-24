const mongoose = require("mongoose")
const express = require("express")
const ConnectDb = require("./config")

const app = express();

app.use(express.json());
const port = 8000;



ConnectDb();

app.use('',require('../Backend/Routes/Userauth'));

app.listen(port,()=>{
    console.log(`running your server on this port ${port} `)
})

