
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
//delete 

const  todolistDelete=async(req,res)=>{
  const idno=req.params.id;
  console.log(idno)
  await todoModels.deleteOne({_id:idno})
  res.json("data is deleted")

}
//find by id 
const findByid=async(req,res)=>{
    const id=req.headers.idno;
    console.log(id) 
    const list=await todoModels.find({_id:id})
    res.json(list)
}
//updatetodolist 
const updateTodolist=async(req,res)=>{
  const id=req.headers.idn;
  const {title,description,taskdate,tasktime}=req.body 
  await todoModels.updateOne({_id:id},{title,description,taskdate,tasktime})
  res.json({status:1,msg:"Data Update"})
}

module.exports={
  addTodolist,
  getTodolist,
  todolistDelete,
  findByid,
  updateTodolist

}