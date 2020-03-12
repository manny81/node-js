var express= require ('express');
var joi=require('joi');
var jwt=require('jsonwebtoken');
var dotenv=require('dotenv')
dotenv.config()
const model=require("../model/admin");
const verify=require('./admintoken');

console.log("controller");
module.exports.Signup=function(req,res)
{
    console.log("we are  entering in  admin sign up function...");
    console.log(req.body);
  
    var body=new model(req.body)
    body.save(function(err,doc)
    {
        if(err)
        {
            console.log("error in file");
            res.send(err);
        }
        else{
            res.send("sent successfully");
        }
        console.log(doc);
        
     
    
        
    });
}




module.exports.login=async function(request,Response)
{

   
    const getemail = request.body.email;
    const  getpassword   = request.body.password;
    model.findOne( { email :getemail},{},{lean:true  },function(err,doc)
    {
        console.log(doc)
        if (err){
            console.log(err)
        }
         else if (doc )
     {
         if(doc.password===getpassword)
        {
           delete doc.password
           Response.json(doc)
        }
       else
        {
            Response.send("password not match");
        }
     }

     else{
        Response.send("email not found");
        }
    }) ;
 const token=await jwt.sign({_id:request.body._id},process.env.Token_secret1)
        Response.header("admin-token",token).send(token);


}
    module.exports.tokadmin=function(request,Response)
        {
            Response.json({
                posts:{
                    title:"hello",
                    discription:"admin"}
                })
            }