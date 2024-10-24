
const todoModels=require('../model/todoModel')

const addTodolist=(req,res)=>{
  const {title,description,taskdate,tasktime}=req.body
  todoModels.create(
    {title,description,taskdate,tasktime}
  )
  res.json({status:1,msg:"submit successfully"})
}
//fetch data 
const getTodolist=async(req,res)=>{
  const todolist=await todoModels.find()
  todolist.length>0?res.json(todolist):res.json([])
}




module.exports={addTodolist,getTodolist}