import React from 'react';

const Blog = ({ blog }) => (
    <div>
        <img src={blog.image} width="100" height="100" />
        <p>{blog.content}</p>
    </div>
);

export default Blog
