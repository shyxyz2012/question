const path=require('path')
const conn=require('./conn.js')

module.exports=(req,res)=>{
    let id=req.body.id,
    sql='select * from `papers` where `id`="'+id+'"'
    if(id==''){
        res.send('error')
        return
    }
    conn.query(sql,function(error,result){
        if(error){
            console.log(error)
            res.send({
                error:1,
                message:'error'
            })
            return
        }
        result[0].content=JSON.parse(result[0].content)
        result[0].item=JSON.parse(result[0].item)
        res.send({
            error:0,
            message:'OK',
            data:result[0]
        })
    })
}