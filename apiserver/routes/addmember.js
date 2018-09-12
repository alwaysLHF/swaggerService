var express = require('express');
var router = express.Router();
var fs = require('fs'); //引入文件读取模块
var PATH = './public/data/'; //配置文件路径
var connection = require('./../config'); // 获取配置文件

// var mysql = require('mysql');

var $sql = require("./../controller/sqlMapping"); // 获取sql 语句

// 通过用户名注册用户
router.post('/addmember', function(req, res) {
    var data = req.body;
    var userName = data.member;
    var projectName = data.projectName;
    var addSqlParams = [projectName, userName];

    var userExist = true;

    connection.query($sql.addmember, addSqlParams, function(err, result) {
        if (err) {
            console.log('数据库插入失败');
            console.log('[SELECT ERROR] - ', err.message);
            return res.send({ "return_code": "9008", "return_msg": "添加失败" });
        } else {
            return res.send({ "return_code": "9000", "return_msg": "添加成功" });
        }
    });

});

module.exports = router;