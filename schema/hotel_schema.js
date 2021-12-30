var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var HotelSchema = new Schema({
    price: Number,
    imageMountain: String,
    nameMountain: String,
    aboutMountain: String,
    imageHotel: String,
    nameHotel: String,
    aboutHotel: String,
    fromCentre: String,
    imageRoom: String,
    night: String,
});

module.exports = mongoose.model('Hotel',HotelSchema);