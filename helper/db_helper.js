var mongoose = require('mongoose');

const mongooseCon = () => {
    var mongoDB = 'mongodb://127.0.0.1:27017/hotel';
    mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

    var db = mongoose.connection;
    console.log('connec to db')

    db.on('error', console.error.bind(console, 'MongoDB connection error'));
}

module.exports = mongooseCon;