import React, { Component } from 'react';

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
            <div id="modal">
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
        );
    }
}

export default EditModal;