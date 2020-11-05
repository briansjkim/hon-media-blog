import React, { Component } from "react";
import tw from "tailwind.macro";
import axios from '../../axios-instance';

import Blog from './Blog';
import Spinner from '../UI/Spinner';

class Blogs extends Component {
    constructor() {
        super();

        this.state = {
            blogs: [],
            loading: true
        };
    };

    componentDidMount() {
        const { blogs } = this.state
        axios.get('/posts.json')
            .then((res) => {
                // converts data to array
                const blogsArray = Object.values(res.data);
                const updatedBlogs = blogs.concat(blogsArray);
                this.setState({
                    blogs: updatedBlogs,
                    loading: false
                })
            })
            .catch(error => console.log(error));
    };

    render() {
        if (this.state.loading) {
            let blog = <Spinner />
        };

        return (
            <div
                css={tw`mx-24 p-12 rounded-lg border border-solid border-gray-200`}
                style={{ boxShadow: '0 10px 28px rgba(0,0,0,.08)' }}
            >
                {this.state.blogs.map((blog, idx) =>
                    <Blog blog={blog} key={idx} />
                )}
            </div>
        );
    };
};

export default Blogs;
