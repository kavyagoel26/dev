//IMPORTANT : => sequence of api routes matters whenever the request come to server it will start reading code from top to bottom
//and if it see that this route match it will print so order matters
const express = require('express');

const app = express();
//app.get => this will only handle get call to user
app.get("/user" ,(req, res) =>{
    res.send({firstName : "Akshay" , lastName: "Saini"})
});

app.post("/user" , (req,res) =>{
    //saving data in db
    res.send("data successfully saved to the database")
})

app.delete("/user" , (req, res) =>{
    res.send("deleted successfully")
})
//app.use => this will match all the http method API calls to /hello
app.use("/hello",(req, res) =>{
    res.send("hello from the server !!!")
});

app.listen(3000 , () =>{
    console.log("successfully running")
});