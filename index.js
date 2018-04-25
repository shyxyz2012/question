
var express=require("express");
var bodyParser=require("body-parser");
var session=require("express-session");
var cookieParser=require("cookie-parser");

var app=express();
app.use(express.static("./static"));//设置静态目录
app.use(bodyParser.urlencoded({extended:false }));//post数据获取和解析
app.use(cookieParser());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.listen(89);

app.get('/home',require('./src/home.js')) 

app.get('/index',require('./src/index.js')) 

app.get('/menu/:filename',require('./src/menu.js'))

app.get('/users/get',require('./src/users.get.js'))

app.get('/users/del',require('./src/users.del.js'))

app.get('/users/add',require('./src/users.add.js'))

app.post('/users/update',require('./src/users.update.js'))

app.get('/users/find',require('./src/users.find.js'))
//
app.get('/users/updatepsw',require('./src/users.updatepsw.js'))
app.get('/add/:filename',require('./src/add.js'))

// 注册
app.get('/regist',require('./src/get.regist.js'))

// 判断当前输入的用户名在数据库中是否存在
app.get('/chkExist',require('./src/get.chkExist.js'))

// 添加用户信息
app.post('/users/add',require('./src/post.users.add.js'))

// 登录
app.get('/login',require('./src/get.login.js'))

//验证用户登陆
app.post('/login', require('./src/post.login.js'))

//注销
app.get('/logout', require('./src/get.logout.js'))

//显示大纲管理所有内容
app.get('/outline', require('./src/get.outline.js'))

// 获取大纲记录
app.get('/getoutline', require('./src/get.outline2.js'))

// 添加大纲
app.post('/outline/add', require('./src/post.outline.add.js'))

// 编辑大纲
app.post('/outline/edit', require('./src/post.outline.edit.js'))

// 删除大纲
app.get('/outline/del', require('./src/get.outline.del.js'))

// 排序
app.post('/outline/sort', require('./src/post.outline.sort.js'))

// 显示问卷管理内容
app.post('/papers/show', require('./src/get.papers.show.js'))

// 保存问卷
app.post('/papers/add', require('./src/post.papers.add.js'))

// 显示papers列表
app.get('/showpaper', require('./src/get.showpaper.js'))

// 删除papers列表中的数据
app.get('/papers/del', require('./src/papers.del.js'))

// 查找papers列表中的数据
app.get('/papers/find', require('./src/papers.find.js'))

// 编辑papers列表中的数据
app.post('/papers/update', require('./src/papers.update.js'))

// 显示问卷作答页面
app.get('/papers.release', require('./src/get.papers.release.js'))

// 添加用户答卷
app.post('/papers/release/add', require('./src/post.papers.release.add.js'))

// 在papers列表中点击详情按钮
app.get('/papers/answer', require('./src/get.papers.answer.js'))

