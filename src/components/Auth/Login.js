import React, { Component, Fragment } from 'react';
import { navigate } from 'gatsby';
import tw from 'tailwind.macro';
import { handleLogin, isLoggedIn } from './Auth';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            user: '',
            pw: '',
            valid: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    };

    submitHandler(event) {
        event.preventDefault();
        handleLogin(this.state);
        if (isLoggedIn()) {
            navigate('/');
        } else if (handleLogin(this.state) === false) {
            this.setState(prevState => {
                return { valid: !prevState.valid };
            });
        };
    };

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    render() {
        if (isLoggedIn()) {
            navigate('/');
        };
        
        let errorMessage = null;
        if (this.state.valid === false) {
            errorMessage = (
                <p
                    css={tw`text-red-600 text-lg font-bold`}
                >
                    Please enter valid credentials!
                </p>
            );
        };

        return (
            <Fragment>
                <form 
                    css={tw`mx-auto mt-10 text-center w-4/5 border border-solid border-gray-200`}
                    style={{ boxShadow: '0 2px 3px #ccc'}}
                >
                    {errorMessage}
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

export default Login;
