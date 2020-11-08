import React, { Component } from 'react';
import tw from "tailwind.macro";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTimes, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

// need functionality on sharing buttons, add email as well
// able to close if overlay is clicked also
// IDK WHAT TO DO WITH COPY LINK


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

        const url = window.location.href;

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
                    <div css={tw`flex flex-row justify-between items-center mx-4 mb-4`}>
                        <a 
                            css={tw`border-none bg-white cursor-pointer`}
                        >
                            <FontAwesomeIcon 
                                icon={faInstagram}
                                size="2x"
                            />
                        </a>
                        <a
                            css={tw`border-none bg-white cursor-pointer`}
                        >
                            <FontAwesomeIcon 
                                icon={faLinkedinIn}
                                size="2x"
                            />
                        </a>
                        <a 
                            css={tw`border-none bg-white cursor-pointer`}
                        >
                            <FontAwesomeIcon 
                                icon={faFacebookF}
                                size="2x"
                            />
                        </a>
                        <a 
                            css={tw`border-none bg-white cursor-pointer`}
                        >
                            <FontAwesomeIcon 
                                icon={faTwitter}
                                size="2x"
                            />
                        </a>
                        <a 
                            css={tw`border-none bg-white cursor-pointer`}
                        >
                            <FontAwesomeIcon 
                                icon={faEnvelope}
                                size="2x"
                            />
                        </a>
                    </div>
                    <h2
                        css={tw`text-left ml-4`}
                    >Copy link</h2>
                    <div>
                        <input id="url-input" ref={el => this.elRef = el} value={window.location.href} onClick={this.copy} readonly />
                        <button 
                            css={tw`mt-4 mb-4 bg-white border-none cursor-pointer`}
                        >
                            <FontAwesomeIcon 
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