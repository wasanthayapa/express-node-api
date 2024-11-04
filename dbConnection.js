require('dotenv').config();
const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL;

const connectDB = async () => {
    mongoose.set("strictQuery", false)

    mongoose.
        connect(MONGO_URL)
        .then(() => {
            console.log('connected to MongoDB')

        }).catch((error) => {
            console.log(error)
        })
}

module.exports = connectDB;
