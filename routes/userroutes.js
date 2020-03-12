var express= require ('express');

var router = express.Router();
var ctr=require("../controller/usercontroller");
const verify=require('../controller/token');



router.post("/saveuser",
    ctr.Signup
);

     console.log("sign up done..........");

     router.post("/loguser",
     ctr.login);
     console.log('login done here');

     router.get("/toklogin",verify,ctr.tok);
     console.log('token verified');


module.exports = router