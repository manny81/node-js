var express= require ('express');
var multer=require('multer');

var router = express.Router();
var ctr=require("../controller/productcontroller");


var storage = multer.diskStorage({
    destination: function(req,file,cb){
      cb(null,'uploads')
    },
  
    filename: function (req, file, cb) {
      console.log(file)
      cb(null, file.originalname + '-' + Date.now()+'.jpg')
    }
  })

  var upload = multer({ storage: storage })


router.post("/saveproduct",upload.single('picture'),ctr.add

);

router.post("/updateproduct",
    ctr.update
     
);
module.exports=router