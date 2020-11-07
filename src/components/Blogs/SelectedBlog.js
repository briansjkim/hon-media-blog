import React, { Component } from "react";
import tw from "tailwind.macro";
import { Link } from "gatsby";

const timeSince = (date) => {
    const seconds = Math.floor(((new Date().getTime()/1000) - date));
  
    let interval = seconds / 31536000;
  
    if (interval >= 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval >= 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval >= 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval >= 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval >= 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

class SelectedBlog extends Component {
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
                    css={tw`bg-white rounded-lg border-solid border-0 overflow-hidden mx-4`}
                    style={{ boxShadow: "3px 4px 10px rgba(0, 0, 0, 0.25)", width: '570px', height: '500px' }}
                >
                    <img alt="Blog" src={this.props.blog.image} width="570" height="300" />
                    <h3>{this.props.blog.title}</h3>
                    <div>{`${timeSince(this.props.blog.datetime)} ago`}</div>
                </div>
            </Link>
        );
    };
};

export default SelectedBlog;
