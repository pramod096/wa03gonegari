var express = require('express');
var router = express.Router();
var data =0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  data++;
  res.send('User accesses are:'+data);
});

module.exports = router;
