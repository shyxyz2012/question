
//删除大纲
const conn=require('./conn.js')
module.exports=(req,res)=>{
    var id=req.query.id
    var sql='delete from `outline` where `id`="'+id+'"'
    conn.query(sql,function(error,result){
        if(error==null){
            res.json({
                error:0,
                message:'OK',
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