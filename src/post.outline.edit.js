// 编辑大纲数据
const conn=require('./conn.js')
module.exports=(req,res)=>{
    setTimeout(function(){
        let id=req.body.id,
        text=req.body.text,

        sql='update `outline` set `text`="'+text+'" where `id`="'+id+'"'
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
    },0)//设置加载时间为2秒
}