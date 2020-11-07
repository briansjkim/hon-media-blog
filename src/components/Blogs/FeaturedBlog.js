import React, { Component } from "react";
import tw from "tailwind.macro";

import { isLoggedIn } from '../Auth/Auth.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

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
                    css={tw`bg-white rounded-lg border-solid border-0 overflow-hidden mx-4 mb-4`}
                    style={{ boxShadow: "3px 4px 10px rgba(0, 0, 0, 0.25)", width: '350px' }}
                >
                  <h3 css={tw`text-left pl-6`}>{this.props.blog.title}</h3>
                  <div css={tw`flex flex-row justify-between px-6 pb-4`}>
                    <div>{`${this.props.timeAgo(this.props.blog.datetime)} ago`}</div>
                    <div>Likes</div>
                  </div>
                </div>
            </div>
        );
    };
};

export default FeaturedBlog;
