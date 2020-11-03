import React, { Component, Fragment } from 'react';

// auth component will be a form
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
        console.log(e.target.value)
    }

    render() {
        return (
            <Fragment>
                <form>
                    <input 
                        type="text" 
                        value={this.state.user} 
                        placeholder="Username"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        value={this.state.pw}
                        placeholder="Password"
                        onChange={this.handleChange}
                    />
                </form>
            </Fragment>
        );
    }
};

export default Auth;
