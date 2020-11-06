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
            <div
                css={tw`bg-white rounded-lg border-solid border-0 overflow-hidden m-4`}
                style={{
                    width: "200px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                    }}
                >
                <img alt="Blog" src={this.props.blog.image} width="200" height="200" />
                <Link 
                    to="/blog" 
                    state={{ blog: this.props.blog }}
                    css={tw`cursor-pointer`}
                >
                    <h3>{this.props.blog.title}</h3>
                    <p>{this.props.blog.content}</p>
                    </Link>
            </div>
        );
    };
};

export default Blog;
