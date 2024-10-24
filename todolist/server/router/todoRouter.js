const express=require("express")
const router=express.Router()
const {addTodolist,getTodolist}=require('../control/todoCtrl')
router.route("/addtodolist").post(addTodolist)
router.route("/gettodolist").get(getTodolist)


module.exports=router