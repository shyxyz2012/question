// 提交问卷
// const path=require('path')
const conn=require('./conn.js')


module.exports=(req,res)=>{
    let paper_id=req.body.paper_id,
    content=req.body.content,
    note=req.body.note,
    cuid=req.body.cuid,
    item=req.body.item,
    title=req.body.title
    sql='insert into `answer` set ?'
    conn.query(sql,{
        paper_id,content,note,cuid,item,title
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