const userModel=require('../model/userModel')
const upload=require("../multerfiles/userupload")
const bcrypt=require('bcrypt')
const {createToken}=require('../middleware/token');
const { use } = require('../router/todoRouter');
let salt=10;
const register=async(req,res)=>{
    const {fullname,email,password}=req.body;
    const result=await userModel.find({email:email})
    if(result.length>0){
        res.json({status:0,msg:"email already exist"})
    }
    else
    {
       console.log(req.file.orginalname)
      bcrypt.hash(password,salt,function(err,hash){
         userModel.create({
            fullname:fullname,
            email:email,
            password:hash,
            images:req.file.filename,


         })
      })
      res.json({status:1,msg:"register"})
    }
   
}

//login 
const login=async(req,res)=>{
    const {email,password}=req.body 
    let user=await userModel.find({email:email})
    let password_db;
    if(user.length>0){
       password_db=user[0].password
       const result= await bcrypt.compare(password,password_db)
       
                    if(result){
                        let token=await createToken(user)
                        console.log(token)
                        res.json({status:1,msg:"Login success",userid:user[0]._id,'token':token})
                    }
                    else{
                        res.json({status:0,msg:"password incorrect"})
                    }
               

    }
    else{
        res.json({status:0,msg:"incorrect email"})
    }

}
const findProfile=async(req,res)=>{
    const id=req.headers.idno;
    const result=await userModel.find({_id:id})
    res.json(result)
}
module.exports={
    register,
    login,
    findProfile
}