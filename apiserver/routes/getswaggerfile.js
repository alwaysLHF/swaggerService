var express = require('express');
var router = express.Router();
var fs = require('fs'); //引入文件读取模块
var PATH = './public/data/'; //配置文件路径

/* 读取数据模块*/
//data/save?fileName=it
//data/save?fileName=it.json
router.post('/swaggerfile', function(req, res) {
    var data = req.body;
    var fileName = data.fileName; //获取url传递的参数，如果用户没有传默认为空
    console.log(fileName);
    fs.readFile(PATH + fileName + '.json',

        function(err, data) {
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
            return res.send({
                status: 9000,
                data: obj
            });
        }

    );
});

module.exports = router;