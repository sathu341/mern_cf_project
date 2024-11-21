const mongoose=require('mongoose')
const userModel=require('./userModel')
const todoSchema=new mongoose.Schema({
    userid:{type:mongoose.Schema.Types.ObjectId,ref:userModel},
    title:{type:String},
    description:{type:String},
    taskdate:{type:String},
    tasktime:{type:String},
    like:{type:Number,default:0}
    
},{timestamps:true})

const todoModels=new mongoose.model("todolist_tbl",todoSchema)


module.exports=todoModels;