import React, { Component } from 'react';
import tw from "tailwind.macro";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from '../../axios-instance';

class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleClose = this.handleClose.bind(this);
        this.deleteBlog = this.deleteBlog.bind(this);
    };

    handleClose(e) {
        this.props.onClose && this.props.onClose(e);
    };

    deleteBlog() {
        const post = this.props.blog;

        axios.delete('/posts.json', post)
            .then((res) => console.log(res))
            .catch(error => console.log(error))
    };

    render() {
        if(!this.props.show) {
            return null;
        };

        return (
            <div
                id="overlay"
                css={tw`fixed w-full h-full inset-0 z-30`}
                style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
                <div
                    id="modal"
                    css={tw`bg-white w-56 h-64 m-auto z-40 mt-64 rounded-md`}
                >
                    <div css={tw`flex justify-center items-center`}>
                        <h2>Options</h2>
                        <button
                            css={tw`ml-8 border-none bg-white cursor-pointer font-bold`}
                            onClick={this.handleClose}
                        >
                            <FontAwesomeIcon 
                                icon={faTimes} 
                            />
                        </button>
                    </div>
                    <div css={tw`mb-6 mt-2`}>
                        <button 
                            css={tw`border-none bg-white cursor-pointer mb-4 text-lg`}
                        >
                            FEATURED
                        </button>
                        <br />
                        <button
                            css={tw`border-none bg-white cursor-pointer text-lg`}
                        >
                            EDIT
                        </button>
                    </div>
                    <div css={tw`w-1/2 m-auto border-t border-b-0 border-l-0 border-r-0 border-gray-400 border-solid`}>
                        <button 
                            css={tw`mt-4 mb-4 text-red-600 bg-white border-none cursor-pointer text-lg`}
                            onClick={this.deleteBlog}
                        >
                            DELETE
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditModal;