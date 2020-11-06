import React, { Component } from "react";
import tw from "tailwind.macro";
import { Link } from "gatsby";

// keep Blog as a class component in order to add 'options' feature for devs

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Link
                to="/blog" 
                state={{ blog: this.props.blog }}
                css={tw`no-underline text-black`}
                style={{ cursor: 'pointer' }}
            >
                <div
                    css={tw`bg-white rounded-lg border-solid border-0 overflow-hidden m-4`}
                    style={{ boxShadow: "3px 4px 10px rgba(0, 0, 0, 0.25)", width: '200px' }}
                >
                    <img alt="Blog" src={this.props.blog.image} width="200" height="200" />
                    <h3>{this.props.blog.title}</h3>
                    <p>{this.props.blog.content}</p>
                </div>
            </Link>
        );
    };
};

export default Blog;
