import React, { Component } from "react";
import tw from "tailwind.macro";
import { Link } from "gatsby";

// keep Blog as a class component in order to add 'options' feature for devs
// maybe change to functional and make 'options' feature a component

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };
    
    render() {
        return (
            <Link
                to="/blog" 
                state={{  blog: this.props.blog }}
                css={tw`no-underline text-black m-4`}
                style={{ cursor: 'pointer', width: '30%' }}
            >
                <div
                    css={tw`bg-white rounded-lg border-solid border-0 overflow-hidden m-4`}
                    style={{ boxShadow: "3px 4px 10px rgba(0, 0, 0, 0.25)" }}
                >
                    <img
                        alt="Blog"
                        src={this.props.blog.image}
                        style={{ objectFit: 'scale-down', maxWidth: '100%', maxHeight: '100%'}}
                    />
                    <h3 css={tw`text-left pl-4`}>{this.props.blog.title}</h3>
                    <div css={tw`flex flex-row justify-between px-4 pb-4`}>
                      <div>{`${this.props.timeAgo(this.props.blog.datetime)} ago`}</div>
                      <div>Likes</div>
                    </div>
                </div>
            </Link>
        );
    };
};

export default Blog;
