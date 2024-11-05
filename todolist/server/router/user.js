const express=require('express')
const upload=require('../multerfiles/userupload')
const user=express.Router()
const {register,login}=require("../control/userCtrl")
user.route("/register").post(upload.single('images'),register)
user.route("/login").post(login)

module.exports=user