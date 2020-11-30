import React, { Component } from "react";
import tw from "tailwind.macro";
import { Link } from "gatsby";

import { isLoggedIn } from '../../Auth/Auth.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


class SelectedBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleEdit = this.handleEdit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleEdit() {
      this.props.edit(this.props.blog);
    }

    handleClick(e) {
      e.preventDefault();
      this.handleEdit();
    };
    
    render() {
        return (
            <Link
              to={ `/blog/${this.props.blog.title}` } 
              state={{ blog: this.props.blog, slug: this.props.blog.title }}
                css={tw`no-underline text-black`}
                style={{ cursor: 'pointer' }}
            >
                <div
                    css={tw`bg-white rounded-lg border-solid border-0 overflow-hidden mx-4 sm:max-w-md md:self-center lg:max-w-lg`}
                    style={{ boxShadow: "3px 4px 10px rgba(0, 0, 0, 0.25)" }}
                >
                  <div
                    css={tw`lg:relative`}
                  >
                    <img
                      alt="Blog"
                      src={this.props.blog.image}
                      style={{ width: '100%', maxHeight: '350px' }}
                    />
                    {isLoggedIn() && 
                    <button
                      type="button"
                      aria-label="Edit"
                      onClick={this.handleClick}
                      css={tw`outline-none cursor-pointer absolute z-1 top-0 right-0 mt-3 mr-3 border-none bg-transparent`}
                    ><FontAwesomeIcon icon={faCog} /></button>
                    }
                  </div>
                    <div 
                      id="info-container"
                      css={tw`flex flex-col justify-between`}
                      style={{ minHeight: '150px' }}
                    >
                      <div css={tw`flex flex-row justify-between px-8`}>
                        <h1 css={tw`hover:text-buttonHover`}>{this.props.blog.title}</h1>
                        <div><FontAwesomeIcon icon={faHeart} css={tw`text-red-500`}/> {this.props.blog.likes}</div>
                      </div>
                      <div css={tw`flex flex-row justify-between px-8 pb-4`}>
                        <div>{`${this.props.timeAgo(this.props.blog.datetime)} ago`}</div>
                        {/* <div>Tags</div> */}
                      </div>
                    </div>
                </div>
            </Link>
        );
    };
};

export default SelectedBlog;
