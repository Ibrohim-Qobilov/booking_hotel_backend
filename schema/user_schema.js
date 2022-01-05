var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    emailAddress: String,
    address: String,
    postCode: Number,
    country: String,
    mobilePhone: String,
    cardNumber: Number,
    expiry: String,
    cvv: Number,
    name: String,
    login : String
});

module.exports = mongoose.model('User',UserSchema);