var express = require('express');
var HotelSchema = require('../schema/hotel_schema');

var router = express.Router();


//* Get All Data
router.get('/', async (req, res, next) => {
  var data = await HotelSchema.find({});
  res.send(data);
});

//* Get All Data with name
router.get('/:nameHotel', async (req, res, next) => {
  var data = await HotelSchema.find({nameHotel: req.params.nameHotel});
  res.send(data);
});

// * get all data to DB
router.post('/', async (req, res, next) => {
  var data = await HotelSchema.create({
    price: req.body.price,
    imageMountain: req.body.imageMountain,
    nameMountain: req.body.nameMountain,
    aboutMountain: req.body.aboutMountain,
    imageHotel: req.body.imageHotel,
    nameHotel: req.body.nameHotel,
    aboutHotel: req.body.aboutHotel,
    fromCentre: req.body.fromCentre,
    imageRoom: req.body.imageRoom,
    night: req.body.night,
  });
  res.send(data);
});

// * Update patch for from DB
router.patch('/', async (req, res, next) => {
  var data = await HotelSchema.findOneAndUpdate(
    {imageMountain: req.body.newImageMountain},{
    price: req.body.price,
    imageMountain: req.body.imageMountain,
    nameMountain: req.body.nameMountain,
    aboutMountain: req.body.aboutMountain,
    imageHotel: req.body.imageHotel,
    nameHotel: req.body.nameHotel,
    aboutHotel: req.body.aboutHotel,
    fromCentre: req.body.fromCentre,
    imageRoom: req.body.imageRoom,
    night: req.body.night,
  }
  ({new: true}));
  res.send(data);
});
module.exports = router;
