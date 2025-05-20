import express from 'express'
import blogModel from '../models/blogModel.js'

const router=express.Router()
router.post('/create',async(req,res)=>{
    try {
        const {title,content}=req.body
        const blog=await new blogModel({title,content}).save()
        return res.status(200).send({
            message:'Blog created successfully',
            blog
        })
    } catch (error) {
        console.log(error)
    }
})

router.get('/get-blogs',async(req,res)=>{
    try{
        const blogs=await blogModel.find({})
        res.status(200).send({
            message:'Blogs fetched successfully',
            blogs
        })
    }catch(error){
        console.log(error)
    }
})

export default router