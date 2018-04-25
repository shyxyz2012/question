
//添加用户
const conn=require('./conn.js')
module.exports=(req,res)=>{
    // 获取vue中data这个对象
    var form=req.query.data
    var sql='insert into `users` (`username`,`password`,`email`,`phone`,`sex`) values ("'+form.username+'","'+form.password+'","'+form.email+'","'+form.phone+'","'+form.sex+'")'
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