import React, { Component } from 'react';
import tw from "tailwind.macro";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

class ShareModal extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleClose = this.handleClose.bind(this);
        this.copy = this.copy.bind(this);
    };

    handleClose(e) {
        this.props.onClose && this.props.onClose(e);
    };

    copy() {
        this.elRef.select();
        document.execCommand("copy");
    }

    render() {
        if(!this.props.show) {
            return null;
        }
        
        // instagram only can be shared on mobile (from what i can find)

        // const url = window.location.href;
        const url = 'https://blog-hon-media.web.app';

        const twitterUrl = `http://twitter.com/share?text=${this.props.blogTitle}&url=${url}`;
        const facebookUrl = `http://www.facebook.com/sharer.php?u=${url}&p[title]=${this.props.blogTitle}`;
        const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${this.props.blogTitle}`;
        // const emailUrl =`mailto:?subject=Check this out from HON Media&amp;body=${this.props.blogTitle} URL here: ${url}`

        return (
            <div
                id="overlay"
                css={tw`fixed w-full h-full inset-0 z-30`}
                style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
                <div
                    id="share_modal"
                    css={tw`bg-white w-1/3 h-auto m-auto z-40 mt-64 rounded-md`}
                >
                    <button
                        css={tw`float-right m-3 border-none bg-white cursor-pointer font-bold`}
                        onClick={this.handleClose}
                    >
                        <FontAwesomeIcon 
                            icon={faTimes} 
                            size="2x"
                        />
                    </button>
                    <h2
                        css={tw`text-left ml-4 pt-4`}
                    >Share via</h2>
                    <div css={tw`flex flex-row justify-center items-center mx-4 mb-4`}>
                        {/* <a 
                            css={tw`border-none bg-white cursor-pointer`}
                        >
                            <FontAwesomeIcon 
                                icon={faInstagram}
                                size="2x"
                            />
                        </a> */}
                        <a
                            href={linkedInUrl}
                            css={tw`flex justify-center items-center text-black w-16 h-16 mr-4 rounded-full bg-gray-300 cursor-pointer`}
                        >
                            <FontAwesomeIcon 
                                icon={faLinkedinIn}
                                size="2x"
                            />
                        </a>
                        <a 
                            href={facebookUrl}
                            css={tw`flex justify-center items-center text-black w-16 h-16 mr-4 rounded-full bg-gray-300 cursor-pointer`}
                        >
                            <FontAwesomeIcon 
                                icon={faFacebookF}
                                size="2x"
                            />
                        </a>
                        <a 
                            href={twitterUrl}
                            css={tw`flex justify-center items-center text-black w-16 h-16 rounded-full bg-gray-300 cursor-pointer`}
                        >
                            <FontAwesomeIcon 
                                icon={faTwitter}
                                size="2x"
                            />
                        </a>
                        {/* <a 
                            href={emailUrl}
                            css={tw`flex justify-center items-center text-black w-16 h-16 rounded-full bg-gray-300 cursor-pointer`}
                        >
                            <FontAwesomeIcon 
                                icon={faEnvelope}
                                size="2x"
                            />
                        </a> */}
                    </div>
                    <h2
                        css={tw`text-left ml-4 mb-2`}
                    >Copy link</h2>
                    <div css={tw`flex flex-row justify-center items-center mx-4 mb-4`}>
                        <input
                            id="url-input"
                            ref={el => this.elRef = el}
                            value={window.location.href}
                            css={tw`mb-4 border-gray-300 border-solid rounded-full`}
                            onClick={this.copy}
                            readOnly
                        />
                        <button 
                            css={tw`ml-4 mb-4 flex justify-center items-center border-none text-black w-16 h-16 rounded-full bg-gray-300 cursor-pointer`}
                            onClick={this.copy}
                        >
                            <FontAwesomeIcon 
                                id="url-button"
                                icon={faCopy}
                                size="2x"
                            />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShareModal;