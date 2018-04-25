
//问卷详情列表
const conn=require('./conn.js')
module.exports=(req,res)=>{
    var id=req.cookies.paper_id,
    // sql='select * from `answer` where `paper_id`="'+id+'"'
    sql='select a.id id,p.title title,a.paper_id paper_id,a.content content,a.item item,a.ctime ctime from papers p,answer a where p.id=a.paper_id && a.paper_id="'+id+'"'
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