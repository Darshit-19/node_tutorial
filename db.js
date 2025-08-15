const mongoose = require('mongoose')

//Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'

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