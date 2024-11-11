const mongoose = require('mongoose');
require('dotenv').config(); 

mongoose.connect(process.env.MONGODB_URI, {
    ssl: true,
});

console.log(process.env.MONGODB_URI);

module.exports = mongoose.connection;
