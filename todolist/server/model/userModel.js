const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    fullname:{type:String},
    email:{type:String},
    password:{type:String},
    images:{type:String}
},{timestamps:true})

const userModel=new mongoose.model("user_tbl",userSchema)
module.exports=userModel
