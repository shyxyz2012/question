
//个人中心中修改个人信息
const conn=require('./conn.js')
module.exports=(req,res)=>{
    var pwd=req.query.pwd,
    id=req.session.loginInfo.id,
    sql='update `users` set ? where `id`="'+id+'"'
    conn.query(sql,{password:req.query.pwd},function(error,result){
        if(error==null){
            res.json({
                error:0,
                message:'OK'
            })
        }else{
            console.log(error)
            res.json({
                error:1,
                message:'error'
            })
        }
    })
}