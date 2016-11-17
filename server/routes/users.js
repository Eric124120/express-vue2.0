var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.send({
    code: 2,
    data: {msg: "success"}
  });
});

module.exports = router;
