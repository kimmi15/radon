const jwt=require('jsonwebtoken')
//jwt is pacakge it grenrate token //permater hota h //(payload,secretes key),singature
const auth=async function(req,res,next){
    if(!(req.headers["x-auth-token"]))
    {
        res.send({msg:"not found token"})
  
    }
    else{
        const token=req.headers["x-auth-token"]
        const isverify=jwt.verify(token, "functionup-radon");
        if(isverify)
        {
            next();
        }
        else{
            res.send("token is wrong")
        }
    }
 
}
module.exports.auth = auth

// jwt.sign({},"")