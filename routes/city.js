var express = require('express');
var router = express.Router();

console.log("city page");

/* GET city listing. */
router.get('/:city', function(req, res, next) {
  var city = req.params.city;
  var cityTitle, cityHeading;
  var images = 4;

  console.log(req.params.city);

  if(city === 'goa'){
   cityTitle = "Goa";
   cityHeading = "Fun, Sunshine and Beaches";
  }
  else if(city === 'jaipur'){
    cityTitle = "Jaipur";
    cityHeading = "The Pink City in colorful Rajasthan";
  }
  else if(city === 'mussourie'){
    cityTitle = "Mussoorie";
    cityHeading = "The Queen of Hills";
  }
  else if(city === 'pondicherry'){
    cityTitle = "Pondicherry";
    cityHeading = "Peaceful Pondicherry, Give time a break!";
  }

  res.render('city', {
    title: cityTitle,
    cityHeading: cityHeading,
    city: city,
    images: images,
    pageTitle:'ILoveMyCity'
  });
  
});

module.exports = router;
