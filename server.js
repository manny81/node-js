
 require("./dbconnection.js");
var express= require ('express');
var app = express();
const swaggerUi = require ('swagger-ui-express');
const swaggerDocument = require('./swagger1.json')
var bodyParser = require('body-parser');
app.use(bodyParser.json())

var routes = require('./routes/userroutes');
var adrouts = require('./routes/adminroutes');
var prorouts= require('./routes/productrouts');
var cartrout=require('./routes/cartrout');
var catrout=require('./routes/catrout');
app.use('/uploads',express.static('uploads'));

     app.use('/' , routes)
    console.log("send to userrouts....");

     app.use('/',adrouts)
    console.log("send to admin routs");
   
    app.use('/',prorouts)
    app.use('/',cartrout)
    app.use('/',catrout)
    
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use('/api/v1', routes,adrouts,prorouts,cartrout,catrout);
    




app.listen(5000)
console.log("server is running on port 5000..........");