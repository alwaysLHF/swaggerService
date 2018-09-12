var express = require('express');
var router = express.Router();
var fs = require('fs'); //引入文件读取模块
var PATH = './public/data/'; //配置文件路径
var connection = require('./../config'); // 获取配置文件

// var mysql = require('mysql');

var $sql = require("./../controller/sqlMapping"); // 获取sql 语句

// 通过项目名称和项目描述创建项目
router.post('/newproject', function(req, res) {
    var data = req.body;
    var projectname = data.projectName; // 获取新建项目名称
    var description = data.description; // 获取新建项目描述
    var userName = data.userName; // 用户名称

    var addSqlParams = [projectname, description];
    var addMemberSqlParams = [projectname, userName];

    connection.query($sql.newproject, addSqlParams, function(err, result) {
        if (err) {
            console.log('数据库插入失败');
            console.log('[SELECT ERROR] - ', err.message);
            return res.send({ "return_code": "9001", "return_msg": "创建项目失败" });
        }

        // return res.send({ "return_code": "9000", "return_msg": "创建项目成功" });
        connection.query($sql.addmember, addMemberSqlParams, function(err, result) {
            if (err) {
                console.log('数据库插入失败');
                console.log('[SELECT ERROR] - ', err.message);
                return res.send({ "return_code": "9001", "return_msg": "创建项目失败" });
            }

            return res.send({ "return_code": "9000", "return_msg": "创建项目成功" });

        });


    });



});

module.exports = router;