const mongoose = require('mongoose');

mongoose.connect( 'mongodb+srv://scottreynolds6294:<terps4114>@cluster0.c4tnf.mongodb.net/googlebooks?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
});

module.exports = mongoose.connection;
