import mongoose from "mongoose";

const connectDb=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB connected successfully ${conn.connection.host}`)
    } catch (error) {
        console.log("Something went wrong")
    }
}

export default connectDb