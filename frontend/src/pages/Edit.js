import React, { useState } from 'react'
import Header from '../components/Layout/Header'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Edit = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const navigate=useNavigate()
    const saveBlog=async()=>{
        try {
            const res=await axios.post('http://localhost:8080/api/v1/blog/create',{title,content})
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    const publishBlog=async()=>{
        try {
            const res=await axios.post('http://localhost:8080/api/v1/blog/create',{title,content})
            navigate('/dashboard')
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
        <Header />
        <div className='edit-blog'>
            <div className='header'>
                <p>Back</p>
                <p onClick={saveBlog} className='save'>Save</p>
                <p>Save as draft</p>
                <p>Preview</p>
                <button type='submit' onClick={publishBlog}>Publish</button>
            </div>
            <div className='input'>
                <input className='title' type="text" placeholder='Add title' value={title} onChange={(e)=>setTitle(e.target.value)} />
                <input className='content' type="text" placeholder='Start writing your blog post here' value={content} onChange={(e)=>setContent(e.target.value)}/>
            </div>
        </div>
    </>
  )
}

export default Edit