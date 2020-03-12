const mongoose = require('mongoose')
const cart =  mongoose.Schema({
        
    
    quantity:{
        type : String,
        require: true,
        
    },
    productid:{
        type : String,
        require: true,
    
        
    },
    price:{
        type : String,
        require: true
        
    },
   
    product :[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'productdata',
        required:true
    }],

});
module.exports=mongoose.model('cartdata',cart)