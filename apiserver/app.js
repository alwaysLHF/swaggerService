var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');

var config = require('./config'); // 获取配置文件

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var jquery = require('./public/swagger-editor/jquery');

var data = require('./routes/data');
var fileData = require('./routes/savefile');
var getFile = require('./routes/getswaggerfile');
var newproject = require('./routes/project');
var projectList = require('./routes/projectlist');
var login = require('./routes/login');
var register = require('./routes/register');
var addmember = require('./routes/addmember');
var $sql = require("./controller/sqlMapping");
var app = express();

// 链接数据库
// var connection = mysql.createConnection(config.mysql);

// connection.connect();

// connection.query($sql.test, function(err, result) {
//     if (err) {
//         console.log('[SELECT ERROR] - ', err.message);
//         return;
//     }

//     console.log('--------------------------SELECT----------------------------');
//     console.log(result);
//     console.log('------------------------------------------------------------\n\n');
// });

// app.use('/data', data);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/jquery', jquery);
app.use('/api', fileData); // 将前端 api文件 保存
app.use('/api', getFile); // 根据项目名返回项目 api文件
app.use('/api', newproject); // 新建项目
app.use('/api', login); // 登陆服务
app.use('/api', register); // 注册服务
app.use('/api', projectList); // 根据用户名返回该用户 项目列表
app.use('/api', addmember);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;