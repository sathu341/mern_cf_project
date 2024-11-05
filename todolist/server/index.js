const express=require('express')
const cors=require('cors')
const app=express()
const port=9000

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
//mongo db connection 
const mongoose=require('mongoose')
main().catch(err=>console.log(err))
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/newtodolist_db');
    console.log("mongodb connected")

}
//router 
const routes=require("./router/todoRouter")
app.use("/todolist",routes)
//user router
const user=require("./router/user") 
app.use("/user",user)

app.listen(port,()=>{
    console.log("server runnning http://localhost:9000")
})