const express = require('express');
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

module.exports.APP=app

const connectDB=require('./dbConnection')
const {listenPort}=require('./utility')
const {route}=require('./route')


connectDB();
listenPort();
route();







