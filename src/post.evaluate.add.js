//添加问卷评价
const conn=require('./conn.js')
module.exports=(req,res)=>{
    var form=req.query.data
    var sql='insert into `evalue` set ?'
    conn.query(sql,{
        evaluate:req.body.evaluate
    },function(error,result){
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