import React from 'react';

const Blog = ({ blog }) => (
    <div>
        {console.log(blog)}
        <p>{blog.content}</p>
    </div>
);

export default Blog
