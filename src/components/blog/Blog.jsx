import React from 'react'
import MyContent from './MyContent'
import DataBlog from './DataBlog'
import Footer from "../Home/Footer"
import BlogCarousel from './BlogCarousel'
import Post from './Post'

const Blog = () => {
  return (
    <div className='w-full h-[100vh] pt-24'>
      <DataBlog/>
      <Post/>
      <MyContent />
      <BlogCarousel/>
      <Footer/>
    </div>
  )
}

export default Blog
