var express = require('express');
var router = express.Router();
var url = require('url');

var bodyParser = require('body-parser')

function jsonParse() {
  var parse = bodyParser.json()
  return function (req, res, next) {
    req.headers['content-type'] = 'application/json'
    parse(req, res, next)
  }
}

var jsonParser = jsonParse();

/* GET home page. */
router.post('/*', jsonParser, function (req, res, next) {
  console.log(req.body)
  var payload = {
    "url": url.parse(req.url),
    "method": req.method,
    "body": req.body
  };

    res.send(JSON.stringify(payload));
});

module.exports = router;
