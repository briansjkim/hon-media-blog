import React, { Component } from "react";
import tw from "tailwind.macro";
import { Link } from "gatsby";

import { isLoggedIn } from '../Auth/Auth.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleEdit = this.handleEdit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };

    handleEdit() {
        this.props.edit(this.props.blog);
    }

    handleClick(e) {
        e.preventDefault();
        this.handleEdit();
    };
    
    render() {
        // if (this.props.blog.isTesting && isLoggedIn()) {
            return (
                <Link
                    to={ `/blog/${this.props.blog.title}` } 
                    state={{ blog: this.props.blog, slug: this.props.blog.title }}
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
                            onClick={this.handleClick}
                            css={tw`outline-none absolute z-1 top-0 right-0 mt-3 mr-3 border-none bg-transparent`}
                            ><FontAwesomeIcon icon={faCog} /></button>
                            }
                        </div>
                        <h3 css={tw`text-left pl-4 hover:text-buttonHover`}>{this.props.blog.title}</h3>
                        <div css={tw`flex flex-row justify-between px-4 pb-4`}>
                        <div>{`${this.props.timeAgo(this.props.blog.datetime)} ago`}</div>
                        <div><FontAwesomeIcon icon={faHeart} /> {this.props.blog.likes}</div>
                        </div>
                    </div>
                </Link>
            )
        // } else if (this.props.blog.isTesting === true && isLoggedIn() === false) {
        //     return null;
        // } else {
        //     return (
        //         <Link
        //             to={ `/blog/${this.props.blog.title}` } 
        //             state={{ blog: this.props.blog, slug: this.props.blog.title }}
        //             css={tw`no-underline text-black m-4`}
        //             style={{ cursor: 'pointer', width: '30%' }}
        //         >
        //             <div
        //                 css={tw`bg-white rounded-lg border-solid border-0 overflow-hidden`}
        //                 style={{ boxShadow: "3px 4px 10px rgba(0, 0, 0, 0.25)" }}
        //             >
        //                 <div
        //                     css={tw`relative`}
        //                 >
        //                     <img
        //                         alt="Blog"
        //                         src={this.props.blog.image}
        //                         style={{ width: '100%' }}
        //                     />
        //                     {isLoggedIn() && 
        //                     <button
        //                     type="button"
        //                     aria-label="Edit"
        //                     onClick={this.handleClick}
        //                     css={tw`outline-none absolute z-1 top-0 right-0 mt-3 mr-3 border-none bg-transparent`}
        //                     ><FontAwesomeIcon icon={faCog} /></button>
        //                     }
        //                 </div>
        //                 <h3 css={tw`text-left pl-4 hover:text-buttonHover`}>{this.props.blog.title}</h3>
        //                 <div css={tw`flex flex-row justify-between px-4 pb-4`}>
        //                 <div>{`${this.props.timeAgo(this.props.blog.datetime)} ago`}</div>
        //                 <div><FontAwesomeIcon icon={faHeart} /> {this.props.blog.likes}</div>
        //                 </div>
        //             </div>
        //         </Link>
        //     );
        // }
    };
};

export default Blog;
