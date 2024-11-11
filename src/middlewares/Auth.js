
const UserAuth = (req,res,next) =>{
    const token = "xyz";
    const isAuthorized = token === "xyz";
    if(!isAuthorized){
        res.status(500).send("Something went wrong");
    }else{
        next();
    }

}
const AdminAuth = (req,res,next) =>{
    const token = "xyz";
    const isAuthorized = token === "xyz";
    if(!isAuthorized){
        res.status(500).send("Something went wrong");
    }else{
        next();
    }

}

module.exports={
    UserAuth,
    AdminAuth
};