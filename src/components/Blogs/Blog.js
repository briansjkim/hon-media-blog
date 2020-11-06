import React, { Component } from 'react';
import tw from 'tailwind.macro';
import { navigate, Link } from 'gatsby';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

        this.handleClick = this.handleClick.bind(this);
    }

    // this will go to the blog post itself
    handleClick() {
        navigate('/');
    }

    render() {
        return (
            <Link
                to='/blog'
                state={{ blog: this.props.blog }}
            >
                <div
                    css={tw`bg-white rounded-lg border-solid border-0 overflow-hidden m-4`}
                    style={{ width: '200px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)', cursor: 'pointer' }}
                    // onClick={this.handleClick}
                >
                    <img
                        alt="Blog"
                        src={this.props.blog.image}
                        width="200" height="200"
                    />
                    <p>{this.props.blog.content}</p>
                </div>
            </Link>
        );
    }
};

export default Blog;
