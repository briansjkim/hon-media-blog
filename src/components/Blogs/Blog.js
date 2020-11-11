import React, { Component } from "react";
import tw from "tailwind.macro";
import { Link } from "gatsby";

import { isLoggedIn } from '../Auth/Auth.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

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
                    css={tw`bg-white rounded-lg border-solid border-0 overflow-hidden`}
                    style={{ boxShadow: "3px 4px 10px rgba(0, 0, 0, 0.25)" }}
                >
                    <div
                        css={tw`relative`}
                    >
                        <img
                            alt="Blog"
                            src={this.props.blog.image}
                            style={{ width: '100%' }}
                        />
                        {isLoggedIn() && 
                        <button
                        type="button"
                        aria-label="Edit"
                        onClick={e => {
                            e.preventDefault()
                            this.props.edit(e)
                        }}
                        css={tw`absolute z-1 top-0 right-0 mt-3 mr-3 border-none bg-transparent`}
                        ><FontAwesomeIcon icon={faCog} /></button>
                        }
                    </div>
                    <h3 css={tw`text-left pl-4`}>{this.props.blog.title}</h3>
                    <div css={tw`flex flex-row justify-between px-4 pb-4`}>
                      <div>{`${this.props.timeAgo(this.props.blog.datetime)} ago`}</div>
                    <div><FontAwesomeIcon icon={faHeart} /> {this.props.blog.likes}</div>
                    </div>
                </div>
            </Link>
        );
    };
};

export default Blog;
