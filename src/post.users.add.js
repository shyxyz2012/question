
//添加用户
const conn=require('./conn.js')
var path=require('path')
module.exports=(req,res)=>{
    setTimeout(function(){
        var username=req.body.username,
        password=req.body.password,
        email=req.body.email,
        phone=req.body.phone,
        sex=req.body.sex

        var sql='insert into `users` set ?'
        conn.query(sql,{
            username:username,
            password:password,
            email:email,
            phone:phone,
            sex:sex

        },function(error,result){
            if(error==null){
                res.cookie('message',JSON.stringify({
                    status:'success',
                    link:'/login',
                    linkText:'登录',
                    msg:'注册成功'
                }))
                res.sendFile(path.resolve('./'+'/public/message.html'))
            }else{
                console.log(error)
                res.cookie('message',JSON.stringify({
                    status:'error',
                    link:'/regist',
                    linkText:'重新注册',
                    msg:'注册失败'
                }))
                res.sendFile(path.resolve('./'+'/public/message.html'))
            }
        })
    },1000)//设置加载时间为2秒
    
}