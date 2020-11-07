import React, { Component } from "react";
import tw from "tailwind.macro";
import axios from '../../axios-instance';

import FeaturedBlog from './FeaturedBlog';
import Blog from './Blog';
import Spinner from '../UI/Spinner';

class Blogs extends Component {
    constructor() {
        super();

        this.state = {
            blogs: [],
            featureds: [],
            loading: true
        };
    };

    componentDidMount() {
        const { blogs } = this.state;
        axios.get('/posts.json')
            .then((res) => {
                // converts data to array
                const blogsArray = Object.values(res.data);
                const updatedBlogs = blogs.concat(blogsArray);

                const featured = [];
                for(let i = 0; i < updatedBlogs.length; i++) {
                    if (updatedBlogs[i].isFeatured) {
                        featured.push(updatedBlogs[i]);
                    }
                }

                this.setState({
                    blogs: updatedBlogs,
                    featureds: featured,
                    loading: false
                });
            })
            .catch(error => console.log(error));
    };

    render() {
        return (
            <div
                css={tw`mx-24 p-12 rounded-lg border border-gray-200`}
            >
                {this.state.loading ? 
                    <Spinner />
                        :
                        
                    <div
                        style={{ width: '1000px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', boxShadow: '0 10px 28px rgba(0,0,0,.08)' }}
                    >  
                        <h1
                            style={{ fontSize: '40px', flex: '0 0 100%' }}
                        >
                            Featured
                        </h1>
                        <div
                            css={tw`overflow-y-auto`}
                        >
                            {this.state.featureds.map((blog, idx) => 
                                <FeaturedBlog blog={blog} key={idx} />
                            )}
                        </div>
                        <h1
                            style={{ fontSize: '40px', flex: '0 0 100%' }}
                        >
                            All
                        </h1>
                        {this.state.blogs.map((blog, idx) =>
                            <Blog blog={blog} key={idx} />
                        )}
                    </div>
                }
            </div>
        );
    };
};

export default Blogs;
