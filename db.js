const mongoose = require('mongoose')
require('dotenv').config()

//Define the MongoDB connection URL
const mongoURL = process.env.MONGO_URL

//Set up MongoDB connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Mongoose maintain a default connection object representing the MongoDB connection
const db = mongoose.connection

//Define event listeners for database connection

db.on('connected',() => {
    console.log('connected to mongodb server');
})

db.on('error',(err) => {
    console.log('mongodb connection error',err);
})

db.on('diconnected',() => {
    console.log('mongodb diconnected');
})

//Export the database connection
module.exports = db