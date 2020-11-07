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
                    css={tw`bg-white `}
                >
                    <div>
                        <h2>Options</h2>
                        <button>X</button>
                    </div>
                    <div>
                        <button>FEATURED</button>
                        <button>EDIT</button>
                        <div>LINE BREAK</div>
                        <button>DELETE</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditModal;