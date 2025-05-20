import React from 'react'
import Header from './Header.js'
import Post from './Post.js'

const Layout = ({children}) => {
  return (
    <>
        <Header />
        <Post />
        <main>{children}</main>
    </>
  )
}

export default Layout