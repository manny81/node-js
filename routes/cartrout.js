var express= require ('express');

var router = express.Router();
var ctrl=require("../controller/cartcontroller");
//const verify=require('../controller/token');



router.post("/savecart",
    ctrl.savee
);
router.get("/viewcart",
    ctrl.view
);






module.exports = router