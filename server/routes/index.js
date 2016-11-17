var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.send({
    code: 1,
    data: {msg: "success"}
  });
});

module.exports = router;
