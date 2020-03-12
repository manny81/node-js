 const mongoose = require('mongoose')
const pschema = mongoose.Schema({
  
    price:{
        type : String,
        require: true,
        
    },
    picture:{
        type : String,
        require: true,
        
    },
    pname:[{
        type : String,
        require: true
        
    }],
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'categorydata' 
    }
},);


module.exports=mongoose.model('productdata',pschema)