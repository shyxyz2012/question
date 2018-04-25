
//登录验证
const conn=require('./conn.js')
var path=require('path')
var md5=require('md5')

module.exports=(req,res)=>{
    setTimeout(function(){
        var username=req.body.username,
        password=req.body.password

        var sql='select * from `users` where `username`="'+username+'" && `password`="'+password+'"'
        conn.query(sql,function(error,result){
            if(error==null){
               if(result.length==0){
                // 登录失败
                res.cookie('message',JSON.stringify({
                    status:'success',
                    link:'/login',
                    linkText:'重新登录',
                    msg:'登录失败，用户名或密码错误'
                }))
                res.sendFile(path.resolve('./'+'/public/message.html'))
               }else{
                // 登录成功
                req.session.username=username
                req.session.loginInfo=result[0]

                res.cookie('message',JSON.stringify({
                    status:'success',
                    link:'/index',
                    linkText:'管理首页',
                    msg:'登录成功',
                    userinfo:result[0]
                }))
                res.sendFile(path.resolve('./'+'/public/message.html'))
               }
            }else{
                console.log(error)
                res.json({
                    error:1,
                    message:'error'
                })
            }
        })
    },2000)//设置加载时间为2秒
    
}