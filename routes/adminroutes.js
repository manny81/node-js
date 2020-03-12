var express= require ('express');

var router = express.Router();
var ctrl=require("../controller/admincontroller");
const verify=require('../controller/admintoken');



router.post("/saveadmin",
    ctrl.Signup
);

router.post("/logadmin",
     ctrl.login);
    
 
router.get("/tokadmin",verify,ctrl.tokadmin);



module.exports = router