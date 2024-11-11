//IMPORTANT : => sequence of api routes matters whenever the request come to server it will start reading code from top to bottom
//and if it see that this route match it will print so order matters
const express = require('express');
const app = express();
const {UserAuth , AdminAuth} = require("./middlewares/Auth")



app.use("/user" , UserAuth);
app.use("/admin", AdminAuth);


//app.use => this will match all the http method API calls to /hello
app.get("/user/hello",(req, res) =>{
    console.log("route1")
 
    res.send("hello from the server !!!")   

});

app.post("/admin/hi", (req,res) =>{
    res.send("hello from server2")
})

app.listen(3000 , () =>{
    console.log("successfully running")
});