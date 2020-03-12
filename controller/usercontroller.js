var express= require ('express');
var joi=require('joi');
var jwt=require('jsonwebtoken');
var dotenv=require('dotenv')
dotenv.config()
const model=require("../model/user");
const verify=require('./token');

console.log("controller");
module.exports.Signup=function(req,res)
{
    console.log("we are  entering in sign up function...");
    console.log(req.body);
  
    var body=new model(req.body)
    body.save(function(err,result)
    {
        if(err)
        {
            console.log("error in code");
            res.send(err);
        }
        else{
            res.send("sent successfully");
        }
        console.log(result);
        
     
    
        
    });
}




module.exports.login=async function(request,response)
{

    const getemail = request.body.email;
    const  getpassword   = request.body.password;
    model.findOne( { email :getemail},{},{lean:true  },function(err,coming)
    {
        console.log(coming)
        if (err){
            console.log(err)
        }
         else if (coming )
     {
         if(coming.password===getpassword)
        {
           delete coming.password
           response.json(coming)
        }
       else
        {
            response.send("password not match");
        }
     }

     else{
        response.send("email not found");
        }
    }) ;
 const token=await jwt.sign({_id:request.body._id},process.env.Token_secret)
        response.header("auth-token",token).send(token);
        


}
    module.exports.tok=function(request,response)
        {
            response.json({
                posts:{
                    title:"hello",
                    discription:"world"}
                })
            }