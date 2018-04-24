'use strict';
var router = require('express').Router();
var AV = require('leanengine');

var Todo = AV.Object.extend('Class1');

// 查询 Todo 列表
router.get('/', function(req, res, next) {
  var query = new AV.Query(Todo);
  query.descending('createdAt');
  query.find().then(function(results) {
    res.render('path/HuaTaiFund', {
      fund: results
    });
  }, function(err) {

  }).catch(next);
});

// 新增 Todo 项目
// router.post('/', function(req, res, next) {
//   var content = req.body.content;
//   var todo = new Todo();
//   todo.set('content', content);
//   todo.save().then(function(todo) {
//     res.redirect('/todos');
//   }).catch(next);
// });

module.exports = router;