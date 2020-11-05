import React, { Component } from "react";
import tw from "tailwind.macro";
import axios from '../../axios-instance';

import Blog from './Blog';
import Spinner from '../UI/Spinner';


// this.state.blogs should be an array of objects but it's an array with one obj that holds the fetched data
// [
//     { {}, {} }
// ]

class Blogs extends Component {
    constructor() {
        super();

        this.state = {
            blogs: [],
            loading: true
        };
    };

    // componentDidMount() {
    //     let updatedBlogs = [...this.state.blogs];
    //     axios.get('/posts.json?')
    //         .then((res) => {
    //             updatedBlogs.concat(res.data);
    //             console.log(updatedBlogs);
    //             this.setState({
    //                 blogs: updatedBlogs,
    //                 loading: false
    //             })
    //         })
    //         .catch(error => console.log(error));
    // };

    render() {
        // let blog = (
        //     <div>
        //         {this.state.blogs.map((blog, idx) =>
        //         // blog is an object of objects instead of array of objects
        //             console.log(blog)
        //             <Blog blog={blog} key={idx} />
        //         )}
        //     </div>
        // );

        // if (this.state.loading) {
        //     blog = <Spinner />
        // };

        return (
            <div
                css={tw`mx-24 p-12 rounded-lg border border-solid border-gray-200`}
                style={{ boxShadow: '0 10px 28px rgba(0,0,0,.08)' }}
            >
                {/* {this.state.blogs.map((blog, idx) =>
                    <Blog blog={blog} key={idx} />
                )} */}
                {/* {console.log(this.state.blogs)} */}
            </div>
        );
    };
};

export default Blogs;
