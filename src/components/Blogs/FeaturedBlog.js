import React, { Component } from "react";
import tw from "tailwind.macro";

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

class FeaturedBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
      this.props.clickHandler(this.props.blog.title);
    }
    
    render() {
        return (
            <div
                css={tw`no-underline text-black`}
                style={{ cursor: 'pointer' }}
                onClick={this.handleClick}
            >
                <div
                    css={tw`bg-white rounded-lg border-solid border-0 overflow-hidden m-4`}
                    style={{ boxShadow: "3px 4px 10px rgba(0, 0, 0, 0.25)", width: '350px' }}
                >
                    <h3>{this.props.blog.title}</h3>
                    <div>{`${timeSince(this.props.blog.datetime)} ago`}</div>
                </div>
            </div>
        );
    };
};

export default FeaturedBlog;
