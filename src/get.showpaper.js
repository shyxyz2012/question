const conn=require('./conn.js')
module.exports=(req,res)=>{
    setTimeout(function(){
        var sql='select * from `papers`order by `ctime` desc'
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
    },0)//设置加载时间为0秒
    
}