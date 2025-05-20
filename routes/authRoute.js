import express from 'express'
import userModel from '../models/userModel.js'

const router=express.Router()
router.post('/register',async(req,res)=>{
    const {username,email,password,cnfpassword}=req.body
    if(!username || !email || !password || !cnfpassword){
        res.send('Fill all the fields')
    }
    const user=await new userModel({username,email,password,cnfpassword}).save()
    return res.status(200).json({
        message:'User registered successfully',
        user
    })
})

router.post('/login',async(req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        res.status(400).send('Email or password is missing')
    }
    const user=await userModel.findOne({email})
    if(!user){
        res.status(404).send('Not registered')
    }
    if(password!=user.password){
        res.status(400).send('Incorrect password')
    }
    return res.status(200).send({
        message:'Login successfully',
        user:{
            email:user.email,
            password:user.password
        }
    })
})

export default router