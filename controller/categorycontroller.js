var joi=require('joi');
//var jwt=require('jsonwebtoken');
//var dotenv=require('dotenv')
//dotenv.config()
const model=require("../model/category");
var category = require('../model/category')
//const verify=require('./admintoken');

console.log("controller");
module.exports.save=function(req,res)
{
    console.log("we are  entering in  category save function...");
    console.log(req.body);
  
    var cat=new model(req.body)
    cat.save(function(err,doc)
    {
        if(err)
        {
            console.log("error in file");
            res.send(err);
        }
        else{
            console.log(doc)
            res.send("sent successfully");
            res.json({Message:'sent successfully..'})
        }
        console.log(doc)
        
        
     
    
        
    });
    
    
}
module.exports.viewcategory=function(req,res)
    {
        category.aggregate([
            {$lookup:{from:'productdata',localField:'_id',foreignField:'category',as:'product'}},
            {$project:{name:1,count:{$size:'$product'},product:{$slice:['$product',2]}}},
            {$limit:2},
            {$skip:1}
        ])
        .exec((err,doc)=>{
            if(err)
            throw err;
            else
            res.json({catcount:doc.length});
        })
    }