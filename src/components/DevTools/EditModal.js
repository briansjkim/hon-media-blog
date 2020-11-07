import React, { Component } from 'react';
import tw from "tailwind.macro";

class EditModal extends Component {
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
                css={tw`fixed w-full h-full inset-0 z-1`}
                style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
                <div
                    id="modal"
                    css={tw`bg-white w-56 h-56 m-auto`}
                >
                    <div css={tw`flex justify-center items-center`}>
                        <h2>Options</h2>
                        <button
                            css={tw`ml-8 border-none bg-white cursor-pointer font-bold`}
                            onClick={this.handleClose}
                        >
                            X
                        </button>
                    </div>
                    <div css={tw`mb-6`}>
                        <button 
                            css={tw`border-solid bg-white cursor-pointer`}
                        >
                            FEATURED
                        </button>
                        <br />
                        <button
                            css={tw`border-solid bg-white cursor-pointer`}
                        >
                            EDIT
                        </button>
                    </div>
                    <div css={tw`w-1/2 m-auto border-t border-b-0 border-l-0 border-r-0 border-gray-400 border-solid`}>
                        <button 
                            css={tw`mt-4 text-red-600 bg-white border-none cursor-pointer`}
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