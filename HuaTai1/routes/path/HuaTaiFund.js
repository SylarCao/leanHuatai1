'use strict';
var moment = require('moment');
var router = require('express').Router();
var AV = require('leanengine');

var Todo = AV.Object.extend('Class1');

// 查询 Todo 列表
router.get('/', function(req, res, next) {
  var query = new AV.Query(Todo);
  query.descending('createdAt');
  query.find().then(function(results) {
  	for (var i=0; i<results.length; i++)
		{
			var aaa = results[i];
			var time = aaa.get('time');
			var tt = modifyTime(time);
			aaa.set('time', tt);
		}
    res.render('path/HuaTaiFund', {
      fund: results
    });
  }, function(err) {

  }).catch(next);
});

function modifyTime(time){
	var date = moment(time).date();
	var month = moment(time).month() + 1;
	var year = moment(time).year();
	var rt = year + "-" + month + "-" + date
	return rt;
};


module.exports = router;