const jwt = require("jsonwebtoken")

module.exports= function (req,res,next){


const token =req.header("auth-token");
    if (!token)  return res.status(400).send("access is denied");
    else {

    try{
        const verified = jwt.verify(token,process.env.token_secret)
        req.user= verified;
        console.log(verified)
       next();

    }catch (err){
        res.status(400).send('token is not valid')
    }}}