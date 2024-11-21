const JWT=require('jsonwebtoken')
require('dotenv').config()
const createToken=async(user)=>{
   const token=  JWT.sign({'userdata':user},process.env.ksecr,{expiresIn:60*60})
  console.log(token)
   return token
}




module.exports={
    createToken
}