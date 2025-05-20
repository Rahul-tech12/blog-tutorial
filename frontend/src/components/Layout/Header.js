import React from 'react'

const Header = () => {
  return (
    <>
      <div className='header'>
        <img src='blog-tutorial\frontend\src\assets\logo.png' />
        <a href='/'>Home</a>
        <a href='/posts'>Posts</a>
        <a href='/comments'>Comments</a>
        <a href='/category'>Categories</a>
      </div>

    </>
  )
}

export default Header