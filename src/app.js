//IMPORTANT : => sequence of api routes matters whenever the request come to server it will start reading code from top to bottom
//and if it see that this route match it will print so order matters
const express = require('express');

const app = express();

//app.use => this will match all the http method API calls to /hello
app.get("/hello",(req, res,next) =>{
    console.log("route1")
 
    // res.send("hello from the server !!!")   
    next();
},
(req,res,next) =>{
    console.log("route2")
  
    // res.send("hello2")
    next()
},
(req,res,next) =>{
    console.log("route3")
    
    // res.send("hello3");
    next();

},
(req,res,next) =>{
    console.log("route4")
    res.send("hello4")
   
},

);

app.listen(3000 , () =>{
    console.log("successfully running")
});