
//读取单个用户信息
const conn=require('./conn.js')
module.exports=(req,res)=>{
    var id=req.session.loginInfo.id
    sql='select * from `users` where `id`="'+id+'"'
    conn.query(sql,function(error,result){
        if(error==null){
            res.json({
                error:0,
                message:'OK',
                data:result
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