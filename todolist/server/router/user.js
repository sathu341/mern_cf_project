const express=require('express')
const upload=require('../multerfiles/userupload')
const user=express.Router()
const {register,login,findProfile}=require("../control/userCtrl")
user.route("/register").post(upload.single('images'),register)
user.route("/login").post(login)
user.route("/findprofile").get(findProfile)

module.exports=user