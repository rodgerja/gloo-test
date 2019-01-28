var express = require('express');
var router = express.Router();
var url = require('url');

/* GET home page. */
router.all('/*', function (req, res, next) {
  console.log(req.body)
  var payload = {
    "url": url.parse(req.url),
    "method": req.method,
    "body": req.body
  };

  res.send(payload);
});

module.exports = router;
