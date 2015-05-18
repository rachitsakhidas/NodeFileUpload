var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/photos', function(req, res) {
	fs.readFile(req.files.userPhoto.path, function (err, data) {
	  // ...
	  var newPath = '/uploads/';
	  fs.writeFile(newPath, data, function (err) {
		res.send({
			path: req.files.userPhoto.path
		});
	  });
	});
});
module.exports = router;
