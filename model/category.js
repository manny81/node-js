const mongoose = require('mongoose')
const category =  mongoose.Schema({
     categoryname:[{
        type : String,
        require:true,
       
    }],
    

    })

module.exports=mongoose.model('categorydata',category)