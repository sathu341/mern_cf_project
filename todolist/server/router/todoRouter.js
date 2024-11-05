const express=require("express")
const router=express.Router()
const {addTodolist,
    getTodolist,
    todolistDelete,
    findByid,
    updateTodolist
}=require('../control/todoCtrl')
router.route("/addtodolist").post(addTodolist)
router.route("/gettodolist").get(getTodolist)
router.route("/todolistdelete/:id").delete(todolistDelete)
router.route("/findbyid").get(findByid)
router.route("/updatetodolist").post(updateTodolist)


module.exports=router