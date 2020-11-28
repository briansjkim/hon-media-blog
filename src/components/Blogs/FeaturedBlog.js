import React, { Component } from "react";
import tw from "tailwind.macro";

import { isLoggedIn } from '../Auth/Auth.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

class FeaturedBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleClick = this.handleClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleClick() {
      this.props.clickHandler(this.props.blog.title);
    };

    handleEdit() {
        this.props.edit(this.props.blog);
    }
    
    render() {
        return (
            <div
                aria-hidden="true"
                css={tw`no-underline text-black`}
                style={{ cursor: 'pointer' }}
                onClick={this.handleClick}
            >
                <div
                    css={tw`bg-white rounded-lg border-solid border-0 pr-12 mr-12 sm:mx-10 mb-4 mt-2`}
                    style={{ boxShadow: "3px 4px 10px rgba(0, 0, 0, 0.25)", width: '350px', overflow: 'hidden' }}
                >
                    <div css={tw`relative`}>
                        {isLoggedIn() &&
                        <FontAwesomeIcon 
                            onClick={this.handleEdit}
                            css={tw`absolute top-0 right-0 mr-3`}
                            icon={faCog} 
                        />
                        }
                        <h3 css={tw`text-left pl-6 hover:text-buttonHover`}>{this.props.blog.title}</h3>
                    </div>
                  <div css={tw`flex flex-row justify-between px-6 pb-4`}>
                    <div>{`${this.props.timeAgo(this.props.blog.datetime)} ago`}</div>
                    <div><FontAwesomeIcon icon={faHeart} css={tw`hover:text-red-500`}/> {this.props.blog.likes}</div>
                  </div>
                </div>
            </div>
        );
    };
};

export default FeaturedBlog;
