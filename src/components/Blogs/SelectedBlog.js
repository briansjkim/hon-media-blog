import React, { Component } from "react";
import tw from "tailwind.macro";
import { Link } from "gatsby";

import { isLoggedIn } from '../Auth/Auth.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

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
                  <div
                    css={tw`relative`}
                  >
                    <img alt="Blog" src={this.props.blog.image} width="570" height="300" />
                    <a
                      onClick={e => {
                        e.preventDefault()
                        this.props.edit(e)
                      }}
                      css={tw`absolute z-1 top-0 right-0 mt-3 mr-3 border-none`}
                    ><FontAwesomeIcon icon={faCog} /></a>
                  </div>
                    <div 
                      id="info-container"
                      css={tw`flex flex-col justify-between`}
                      style={{ height: '200px' }}
                    >
                      <div css={tw`flex flex-row justify-between px-8`}>
                        <h1>{this.props.blog.title}</h1>
                        <div>Likes</div>
                      </div>
                      <div css={tw`flex flex-row justify-between px-8 pb-4`}>
                        <div>{`${this.props.timeAgo(this.props.blog.datetime)} ago`}</div>
                        <div>Tags</div>
                      </div>
                    </div>
                </div>
            </Link>
        );
    };
};

export default SelectedBlog;
