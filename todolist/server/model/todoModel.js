const mongoose=require('mongoose')

const todoSchema=new mongoose.Schema({
    title:{type:String},
    description:{type:String},
    taskdate:{type:String},
    tasktime:{type:String}

},{timestamps:true})

const todoModels=new mongoose.model("todolist_tbl",todoSchema)


module.exports=todoModels;