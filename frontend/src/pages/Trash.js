import React from 'react'
import Layout from '../components/Layout/Layout'

const Trash = () => {
  return (
   <>
           <Layout />
           <div className='trash'>
               <tr>
                   <th>Post</th>
                   <th>Deleted</th>
                   <th>Categories</th>
               </tr>
               <tr>
                   <img src='' />
                   <td></td>
                   <td></td>
                   <td></td>
                   <button type='submit'>Restore</button>
                   <i class="fa-solid fa-trash"></i>
               </tr>
           </div>
       </>
  )
}

export default Trash