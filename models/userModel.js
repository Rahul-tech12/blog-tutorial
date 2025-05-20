import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },     
    password:{
        type:Number,
        required:true
    },
    cnfpassword:{
        type:Number,
        required:true
    }
},{timestamps:true})

export default mongoose.model('users',userSchema)