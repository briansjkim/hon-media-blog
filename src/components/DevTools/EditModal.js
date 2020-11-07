import React, { Component } from 'react';
import tw from "tailwind.macro";

class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(e) {
        this.props.onClose && this.props.onClose(e);
    }

    render() {
        if(!this.props.show) {
            return null;
        }

        return (
            <div
                id="overlay"
                css={tw`fixed w-full h-full inset-0`}
                style={{ backgroundColor: 'rgba(0,0,0,0.5)', cursor: 'pointer' }}
            >
                <div
                    id="modal"
                    css={tw`bg-white w-1/4 h-56 m-auto`}
                >
                    <div css={tw`flex`}>
                        <h2>Options</h2>
                        <button onClick={this.handleClose}>X</button>
                    </div>
                    <div css={tw`mb-6`}>
                        <button>FEATURED</button>
                        <br />
                        <button>EDIT</button>
                    </div>
                    <div css={tw`w-1/2 m-auto border-t border-b-0 border-l-0 border-r-0 border-gray-400 border-solid`}>
                        <button css={tw`mt-4`}>DELETE</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditModal;