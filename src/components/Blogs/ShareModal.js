import React, { Component } from 'react';
import tw from "tailwind.macro";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTimes, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

// need functionality on sharing buttons, add email as well
// able to close if overlay is clicked also
// show grayed out link next to copy button, both should copy and notify user


class ShareModal extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleClose = this.handleClose.bind(this);
    };

    handleClose(e) {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        if(!this.props.show) {
            return null;
        }

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
                    <div css={tw`flex justify-between items-center`}>
                        <h2>Share via</h2>
                        <button
                            css={tw`ml-8 border-none bg-white cursor-pointer font-bold`}
                            onClick={this.handleClose}
                        >
                            <FontAwesomeIcon 
                                icon={faTimes} 
                            />
                        </button>
                    </div>
                    <div css={tw`flex justify-between items-center`}>
                        <button 
                            css={tw`border-none bg-white cursor-pointer mb-4 text-lg`}
                        >
                            <FontAwesomeIcon 
                                icon={faInstagram} 
                            />
                        </button>
                        <br />
                        <button
                            css={tw`border-none bg-white cursor-pointer mb-4 text-lg`}
                        >
                            <FontAwesomeIcon 
                                icon={faLinkedinIn} 
                            />
                        </button>
                        <button 
                            css={tw`border-none bg-white cursor-pointer mb-4 text-lg`}
                        >
                            <FontAwesomeIcon 
                                icon={faFacebookF} 
                            />
                        </button>
                        <button 
                            css={tw`border-none bg-white cursor-pointer mb-4 text-lg`}
                        >
                            <FontAwesomeIcon 
                                icon={faTwitter} 
                            />
                        </button>
                        <button 
                            css={tw`border-none bg-white cursor-pointer mb-4 text-lg`}
                        >
                            <FontAwesomeIcon 
                                icon={faEnvelope} 
                            />
                        </button>
                    </div>
                    <div css={tw`w-1/2 m-auto`}>
                        <h2>Copy link</h2>
                        <div>
                            <button 
                                css={tw`mt-4 mb-4 bg-white border-none cursor-pointer text-lg`}
                            >
                                <FontAwesomeIcon 
                                    icon={faCopy} 
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShareModal;