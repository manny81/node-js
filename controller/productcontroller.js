var joi=require('joi');
//var jwt=require('jsonwebtoken');
//var dotenv=require('dotenv')
//dotenv.config()
const model=require("../model/product.js");
//const verify=require('./admintoken');

console.log("controller");
module.exports.add=function(req,res)
{
    console.log("we are  entering in  product signup up function...");
   // console.log(req.body);
   // console.log(req);
    
    //console.log(img.path)
  
    var cgt=new model({
        
        price:req.body.price,
        picture:req.file.path,
        pname:req.body.pname,
        category:req.body.category

    })
    cgt.save(function(err,doc)
    {
        if(err)
        {
            console.log("error in file");
            res.send(err);
        }
        else{
            res.send("sent successfully");
        }
        console.log(doc)
        
        
     
    
        
    });
}
module.exports.update=function(request,response)
{
  var prod = request.body.pname;
    var body = request.body;
model.findOneAndUpdate(prod,body,{new:true},function(err,doc) {
        if(err)
            response.status(400);
        else
        response.status(200).send(doc);
    });

}



