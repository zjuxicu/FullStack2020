import React from 'react'
import PropTypes from 'prop-types'


const Blog = ({ blog }) => (
  <div className='blog'>
    {blog.title} {blog.author}
  </div>
)
Blog.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default  { Blog }