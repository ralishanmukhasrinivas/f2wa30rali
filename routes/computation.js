var express = require('express');
var router = express.Router();
var x=Math.random();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('computation', { 
    solution1:'Math.fround() applied to'+x+ 'is'+Math.fround(x),
    solution2:'Math.random() applied to'+x+ 'is'+Math.random(x),
    solution3:'Math.round() applied to'+x+ 'is'+Math.round(x),
    title:'computation by shanmukha srinivas '})
});

module.exports = router;
