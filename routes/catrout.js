var express= require ('express');

var crouter = express.Router();
var ctr2=require("../controller/categorycontroller");
//const verify=require('../controller/token');



crouter.post("/savecategory",
    ctr2.save
);
crouter.post("/viewcategory",
    ctr2.viewcategory
);



module.exports = crouter