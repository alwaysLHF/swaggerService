var express = require('express');
var router = express.Router();
var fs = require('fs'); //引入文件读取模块
var PATH = './public/data/'; //配置文件路径

/* 读取数据模块*/
//data/save?projectname=it
//data/save?projectname=it.json
router.post('/save', function(req, res) {
    var data = req.body;
    var projectname = data.projectname; //获取url传递的参数，如果用户没有传默认为空
    fs.writeFile(PATH + projectname + '.json', data.obj,
        function(err) {
            if (err) {
                res.send({ "return_code": "9000", "return_msg": "获取失败" })
                return console.error(err);
            }
            console.log("数据写入成功！");
            console.log("--------我是分割线-------------")
            console.log("读取写入的数据！");
            return res.send({ "return_code": "9000", "return_msg": "获取成功" })
                // fs.readFile('input.txt', function(err, data) {
                //     if (err) {
                //         return console.error(err);
                //     }
                //     console.log("异步读取文件数据: " + data.toString());
                // });
        }
    );
    // setTimeout(() => { return res.send(req.body) }, 10);
});

module.exports = router;