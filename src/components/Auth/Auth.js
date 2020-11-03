import React, { Component, Fragment } from 'react';
import tw from 'tailwind.macro';

class Auth extends Component {
    constructor() {
        super();

        this.state = {
            user: '',
            pw: ''
        };

        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    render() {
        return (
            <Fragment>
                <form css={tw`mx-auto w-4/5 text-center`}>
                    <input 
                        type="text" 
                        id="user"
                        value={this.state.user} 
                        placeholder="Username"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        id="pw"
                        value={this.state.pw}
                        placeholder="Password"
                        onChange={this.handleChange}
                    />
                    <button>
                        SUBMIT
                    </button>
                </form>
            </Fragment>
        );
    }
};

export default Auth;
