var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var joi=require('joi');

var user = new Schema({
  
  firstname: {
      type:String,
      
     },
  
  emailid: {
      type:String, 
      unique:true,
      required:true
    },
  password:{
      type:String,
      required:true
    },
  phoneno: {
      type:String
    },
    createat:{
        type:Date,defaut:Date.now()
    } ,
    updateat:
    {
        type:Date,defaut:Date.now()
    }
    
  
});
module.exports=mongoose.model('userdata',user)