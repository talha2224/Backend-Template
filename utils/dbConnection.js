const mongoose = require('mongoose');

const databaseConnection = ()=>{
    let connection = mongoose.connect(process.env.dbUrl)
    connection ? console.log("Database Connected") : console.log("Database Connection Failed")
}

module.exports = databaseConnection