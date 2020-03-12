var joi=require('joi');
//var jwt=require('jsonwebtoken');
//var dotenv=require('dotenv')
//dotenv.config()
const model=require("../model/cart.js");
//const verify=require('./admintoken');

console.log("controller");
module.exports.savee=function(req,res)
{
    console.log("we are  entering in  cart  function...");
    console.log(req.body);
  
    var cart=new model(req.body)
    cart.savee(function(err,doc)
    {
        if(err)
        {
            console.log("error in file");
            res.send(err);
        }
        else{
            console.log(doc)
            res.send("sent successfully");
        }
        console.log(doc)
        
        
     
    
        
    });}
    module.exports.view=function(req,res){
        
    model.find({productid:req.body.productid})
        // .select('productid quantity  ' )
        .populate('product')
        .exec()
        .then(orders => {
            res.status(200).json({
                count: orders.length,
                orders: orders
               
            });
            console.log('done')
        })
        .catch(error => {
            res.status(400)
            
        })
    }

    
