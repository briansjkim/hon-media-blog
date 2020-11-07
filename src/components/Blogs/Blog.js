import React, { Component } from "react";
import tw from "tailwind.macro";
import { Link } from "gatsby";

// keep Blog as a class component in order to add 'options' feature for devs
// maybe change to functional and make 'options' feature a component

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
      console.log('hi')
    }
    
    render() {
        return (
            <Link
                to="/blog" 
                state={{  blog: this.handleClick }}
                css={tw`no-underline text-black`}
                style={{ cursor: 'pointer' }}
            >
                <div
                    css={tw`bg-white rounded-lg border-solid border-0 overflow-hidden m-4`}
                    style={{ boxShadow: "3px 4px 10px rgba(0, 0, 0, 0.25)", width: '300px' }}
                >
                    <img alt="Blog" src={this.props.blog.image} width="300" height="356" />
                    <h3>{this.props.blog.title}</h3>
                    <div>{`${this.props.timeAgo(this.props.blog.datetime)} ago`}</div>
                </div>
            </Link>
        );
    };
};

export default Blog;
