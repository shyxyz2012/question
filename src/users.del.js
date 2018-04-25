
//删除用户
const conn=require('./conn.js')
module.exports=(req,res)=>{
    var id=req.query.id
    var sql='delete from `users` where `id`="'+id+'"'
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