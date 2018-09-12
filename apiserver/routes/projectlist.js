var express = require('express');
var router = express.Router();
var PATH = './public/data/'; //配置文件路径
var connection = require('./../config'); // 获取配置文件
var $sql = require("./../controller/sqlMapping"); // 获取sql 语句

/* 通过用户名查找相关项目*/
router.post('/projectlist', function(req, res) {
    var data = req.body;
    var userName = data.userName; //获取url传递的参数，如果用户没有传默认为空

    var addSqlParams = [userName];
    var projectList = [];

    connection.query($sql.projectList, addSqlParams, function(err, result) {
        if (err) {
            console.log('数据库插入失败');
            console.log('[SELECT ERROR] - ', err.message);
            return res.send({ "return_code": "9003", "return_msg": "获取项目列表失败" });
        }
        result.forEach(
            element => {
                if (element.participant_name === userName) {
                    projectList.push({ projectName: element.project_name, description: element.project_describe });
                }
            }
        );

        projectList.forEach(
            project => {
                project.member = [];
                result.forEach(
                    element => {
                        if (project.projectName === element.project_name) {
                            project.member.push(element.participant_name);
                        }
                    }
                );
            }
        );
        console.log(result);

        console.log(projectList);
        return res.send({ "return_code": "9000", "return_msg": projectList });
    });
    // projectList.forEach(
    //     pro => {
    //         console.log(pro)
    //             // connection.query($sql.member, pro.project_name, function(err, result) {
    //             //     if (err) {
    //             //         console.log('数据库插入失败');
    //             //         console.log('[SELECT ERROR] - ', err.message);
    //             //         return res.send({ "return_code": "9003", "return_msg": "获取项目列表失败" });
    //             //     }
    //             //     console.log('result2');
    //             //     console.log(result);
    //             // });
    //         return res.send({ "return_code": "9003", "return_msg": "获取项目列表失败" });
    //     }
    // );
    // connection.query($sql.member, 'hubble-console', function(err, result) {
    //     if (err) {
    //         console.log('数据库插入失败');
    //         console.log('[SELECT ERROR] - ', err.message);
    //         return res.send({ "return_code": "9003", "return_msg": "获取项目列表失败" });
    //     }
    //     console.log('result2');
    //     console.log(result);
    // });
    // connection.query($sql.projectList, addSqlParams, function(err, result) {
    //     if (err) {
    //         console.log('数据库插入失败');
    //         console.log('[SELECT ERROR] - ', err.message);
    //         return res.send({ "return_code": "9003", "return_msg": "获取项目列表失败" });
    //     }
    //     console.log('result3');
    //     console.log(result);
    // });
});

module.exports = router;






//     fs.writeFile(PATH + projectname + '.json', JSON.stringify(''),
//         function(err) {
//             if (err) {
//                 return console.error(err);
//             }
//             console.log("数据写入成功！");
//             console.log("--------我是分割线-------------")
//             console.log("读取写入的数据！");
//             // fs.readFile('input.txt', function(err, data) {
//             //     if (err) {
//             //         return console.error(err);
//             //     }
//             //     console.log("异步读取文件数据: " + data.toString());
//             // });
//         }
//     );
// });