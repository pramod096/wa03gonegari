var express = require('express');
var router = express.Router();

/* GET My Data Page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Pramod Reddy Gonegari' });
});

module.exports = router;
