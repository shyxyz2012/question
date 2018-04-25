// 判断当前输入的用户名在数据库中是否存在

const conn=require('./conn.js')
module.exports=(req,res)=>{
    // 获取用户在表单输入的数据
    var filed=req.query.filed,
    table=req.query.table,
    value=req.query.value

        var sql='select * from `'+table+'` where `'+filed+'`="'+value+'"'
        conn.query(sql,function(error,result){
            if(error==null){
                if(result.length==0){
                    res.json({
                    error:0,
                    message:'字段值不存在',
                  }) 
                }else{
                    res.json({
                        error:2,
                        message:'字段值已存在',
                    }) 
                }
            }else{//sql语句报错
                console.log(error)
                res.json({
                    error:1,
                    message:'error'
                })
            }
        })
    
}
