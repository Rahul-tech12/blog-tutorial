import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import axios from 'axios'

const Dashboard = () => {
    const [posts, setPosts] = useState()
    const showPosts=async()=>{
        try{
            const res=await axios.get('http://localhost:8080/api/v1/blog/get-blogs')
            console.log(res?.data?.blogs)
            if(res?.data){
                await setPosts(res?.data?.blogs)
            }
        }catch(error){
            console.log(error)
        }        
    }
    useEffect(()=>{
        showPosts()
    })
  return (
    <>
        <Layout>
        <table className='posts'>
            <thead>
                <tr>
                <th>Post</th>
                <th>Published Date</th>
                <th>Views</th>
                <th>Comments</th>
                <th>Likes</th>
            </tr>
            </thead>
            <tbody>
                {posts?.map(posts=>(
                    <tr key={posts._id}>
                        <td>{posts.title}</td>
                        <td>{posts.createdAt}</td>
                        <td></td>
                        <td></td>
                    </tr>
                ))}
            </tbody>

        </table>
        <button type='submit'>Edit</button>
                <select>
                    <option>Pin post</option> 
                    <option>Duplicate post</option>     
                    <option>Revert to draft</option>     
                    <option>Move to trash</option>         
                </select>
        </Layout>
    </>
  )
}

export default Dashboard