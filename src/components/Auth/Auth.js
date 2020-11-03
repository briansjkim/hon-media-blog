import React, { Component, Fragment } from 'react';
import tw from 'tailwind.macro';

class Auth extends Component {
    constructor() {
        super();

        this.state = {
            user: '',
            pw: '',
            valid: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    };

    submitHandler(event) {
        event.preventDefault();
        // validity check
    };

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    render() {
        let errorMessage = null;
        // if username and pw are incorrect, show error message

        return (
            <Fragment>
                {errorMessage}
                <form 
                    css={tw`mx-auto mt-10 text-center w-4/5 border border-solid border-gray-200`}
                    style={{ boxShadow: '0 2px 3px #ccc'}}
                >
                    <input
                        css={tw`w-3/5 p-2 block mx-auto mt-6 mb-6`}
                        type="text" 
                        id="user"
                        value={this.state.user} 
                        placeholder="Username"
                        onChange={this.handleChange}
                    />
                    <input
                        css={tw`w-3/5 p-2 block mx-auto mb-5`}
                        type="text"
                        id="pw"
                        value={this.state.pw}
                        placeholder="Password"
                        onChange={this.handleChange}
                    />
                    <button
                        css={tw`border-none bg-white mt-8 mb-8 p-3 cursor-pointer outline-none`}
                        onClick={this.submitHandler}
                    >
                        SUBMIT
                    </button>
                </form>
            </Fragment>
        );
    }
};

export default Auth;
