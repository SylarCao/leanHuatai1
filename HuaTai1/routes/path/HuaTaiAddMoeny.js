'use strict';
var moment = require('moment');
var router = require('express').Router();
var AV = require('leanengine');

var Todo = AV.Object.extend('Class1');

// 查询 Todo 列表
router.get('/', function(req, res, next) {
  var query = new AV.Query(Todo);
  query.descending('createdAt');
  query.find().then(function() {
    res.render('path/HuaTaiAddMoeny', {
      
    });
  }, function(err) {

  }).catch(next);
});


router.post('/addMoney', function(req, res, next) {

	var name = req.body.name;
	var money = parseInt(req.body.money);
	var version = req.body.version;
	var time =  moment().toDate();

	var member = new Todo();
	member.set('name', name);
  member.set('money', money);
  member.set('version', version);
  member.set('time', time);

  member.save().then(function(todo) {
    res.redirect('/HuaTaiFund');
  }).catch(next);

});

// function getIPAddress(time){
	
// 	return rt;
// };



module.exports = router;