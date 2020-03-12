const jwt = require("jsonwebtoken")

module.exports= function (req,res,next){


const token1 =req.header("admin-token");
    if (!token)  return res.status(400).send("access is denied");
    else {

    try{
        const verified1 = jwt.verify(token1,process.env.token_secret1)
        req.admin= verified1;
        console.log(verified1)
       next();

    }catch (err){
        res.status(400).send('token is not valid')
    }}}