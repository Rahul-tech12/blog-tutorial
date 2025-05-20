import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import authRoute from './routes/authRoute.js'
import blogRoute from './routes/blogRoute.js'
import cors from 'cors'

dotenv.config()
connectDb()
const app=express()
app.use(express.json())
app.use(cors())
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/blog',blogRoute)

app.get('',(req,res)=>{
    res.send('Welcome to server')
})
const PORT=process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})