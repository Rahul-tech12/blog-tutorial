import React from 'react'
import Layout from '../components/Layout/Layout'

const Drafts = () => {
  return (
    <>
        <Layout />
        <div className='drafts'>
            <tr>
                <th>Post</th>
                <th>Last updated</th>
                <th>Categories</th>
            </tr>
            <tr>
                <img src='' />
                <td></td>
                <td></td>
                <td></td>
                <button type='submit'>Edit</button>
                <select>
                    <option>Publish post</option> 
                    <option>Duplicate post</option>   
                    <option>Move to trash</option>         
                </select>
            </tr>
        </div>
    </>
  )
}

export default Drafts