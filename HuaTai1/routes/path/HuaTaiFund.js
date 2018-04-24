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
  	var total = 0;
  	for (var i=0; i<results.length; i++)
		{
			var aaa = results[i];
			var time = aaa.get('time');
			var tt = modifyTime(time);
			aaa.set('time', tt);
			var money = aaa.get('money');
			total = total + money;
		}

		var cc = new Todo();
		cc.set("name", "总共");
		cc.set("money", total);
		cc.set("version", "255.255.255")
		cc.set("time", moment().format("YYYY-MM-DD"))
		results.unshift(cc);
    res.render('path/HuaTaiFund', {
      fund: results
    });
  }, function(err) {

  }).catch(next);
});

function modifyTime(time){
	var rt =  moment(time).format("YYYY-MM-DD");  
	return rt;
};

module.exports = router;