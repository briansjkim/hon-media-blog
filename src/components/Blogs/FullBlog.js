import React, { Component } from 'react';
import tw from 'tailwind.macro';

import Interactions from '../DevTools/Interactions';

class FullBlog extends Component {
    constructor(props) {
        super(props);

        this.handleLike = this.handleLike.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.handleShare = this.handleShare.bind(this);
    };

    handleLike() {
    };

    handleComment() {

    };

    handleShare() {

    };


    render() { 
        return (
            <div
                    css={tw`text-center mb-16`}
                    style={{ fontFamily: 'Poppins'}}
                >
                    <div> 
                        <div css={tw`w-1/2 m-auto text-left`}>
                            <h1
                                style={{ fontWeight: '500', fontSize: '38px'}}
                            >
                                {this.props.blog.title}
                            </h1>
                        </div>
                        <div css={tw`w-1/2 flex m-auto`}>
                            <div 
                                css={tw`w-1/2 float-left mr-10 text-left`}>
                                <p>{this.props.blog.name}</p>
                                <p>{this.props.blog.date}</p>
                            </div>
                            <div css={tw` w-1/2 flex justify-end`}>
                                <Interactions blog={this.props.blog} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img 
                            alt="Blog" 
                            src={this.props.blog.image}
                            width="400"
                            height="400"
                        />
                    </div>
                    <div css={tw`w-1/2 m-auto mt-6 text-left`}>
                        <p css={tw`whitespace-pre-line`}>{this.props.blog.content}</p>
                    </div>
                <div css={tw`flex w-1/2 m-auto`}>
                    <Interactions blog={this.props.blog} />
                </div>
            </div>
        );
    };
};

export default FullBlog;
