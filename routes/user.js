var express = require('express');
var User = require('../schema/user_schema');

var router = express.Router();


//* Get All Data
router.get('/', async (req, res, next) => {
  var data = await User.find({});
  res.send(data);
});
// * get all data to DB
router.post('/', async (req, res, next) => {
  var data = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailAddress: req.body.emailAddress,
    address: req.body.address,
    postCode: req.body.postCode,
    country: req.body.country,
    mobilePhone: req.body.mobilePhone,
    cardNumber: req.body.cardNumber,
    expiry: req.body.expiry,
    cvv: req.body.cvv,
    name: req.body.name,
  });
  res.send(data);
});

// * Update patch for from DB
// router.patch('/', async (req, res, next) => {
//   var data = await HotelSchema.findOneAndUpdate(
//     {imageMountain: req.body.newImageMountain},{
//     price: req.body.price,
//     imageMountain: req.body.imageMountain,
//     nameMountain: req.body.nameMountain,
//     aboutMountain: req.body.aboutMountain,
//     imageHotel: req.body.imageHotel,
//     nameHotel: req.body.nameHotel,
//     aboutHotel: req.body.aboutHotel,
//     fromCentre: req.body.fromCentre,
//     imageRoom: req.body.imageRoom,
//     night: req.body.night,
//   }
//   ({new: true}));
//   res.send(data);
// });
module.exports = router;
