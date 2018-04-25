
//读取用户表
const conn=require('./conn.js')
module.exports=(req,res)=>{
    var id=req.body.id,
    sql='update `users` set ? where `id`="'+id+'"'
    conn.query(sql,{
        username:req.body.username,
        password:req.body.password,
        sex:req.body.sex,
        email:req.body.email,
        phone:req.body.phone
    },function(error,result){
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