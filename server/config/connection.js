const mongoose = require('mongoose');
require('dotenv').config(); 

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
});

module.exports = mongoose.connection;
