var express = require('express');
var router = express.Router();
var fs = require('fs'); //引入文件读取模块
var PATH = './public/data/'; //配置文件路径

/* 读取数据模块*/
//data/read?id=it
//data/read?id=it.json
router.get('/read', function(req, res, next) {
    var id = req.param('id') || ''; //获取url传递的参数，如果用户没有传默认为空
    fs.readFile(PATH + id + '.json', function(err, data) {
        if (err) {
            return res.send({
                status: 0,
                info: '读取文件异常'
            });
        }
        // var COUNT = 50; //返回最多50行数据
        var obj = [];
        try {
            obj = JSON.parse(data.toString()); //这里做异常处理，如果文件中存储的不是json格式的字符串（比如空文件）这里会抛出异常
        } catch (e) {
            obj = [];
        }

        // if (obj.length > COUNT) {
        //     obj = obj.slice(0, COUNT); //返回前50行数据

        // }
        return res.send(obj);
    });
});

module.exports = router;