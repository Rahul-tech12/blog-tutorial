import React from 'react'

const Post = () => {
  return (
    <>
        <div className='post-container'> 
          <div className='post-section'>
            <h1>Posts</h1>
            <button type='submit'><a href='/edit-blog'>Create new post</a></button>
        </div>
        <div className='tabs-section'>
          <a href='/dashboard'>Published</a>
          <a href='/drafts'>Drafts</a>
          <a href='/trash'>Trash</a>
        </div>
        </div>
    </>
  )
}

export default Post