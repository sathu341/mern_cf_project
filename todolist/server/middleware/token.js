const JWT=require('jsonwebtoken')
const createToken=async(user)=>{
   const token=  JWT.sign({'userdata':user},'kh56dfgj',{expiresIn:60*60})
  console.log(token)
   return token
}




module.exports={
    createToken
}