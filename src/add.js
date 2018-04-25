var path=require('path')
module.exports=(req,res)=>{
    var filename=req.params.filename
    res.sendFile(path.resolve('./')+'/public/'+filename)
}