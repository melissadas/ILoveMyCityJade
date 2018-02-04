var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to our site. You can choose from many cities and see what it is like to be there through a simple series of photos.',
pageTitle:'ILoveMyCity' });
});

module.exports = router;
