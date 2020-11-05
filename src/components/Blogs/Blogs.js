import React, { Component } from "react";
import tw from "tailwind.macro";
import axios from '../../axios-instance';

class Blogs extends Component {
    constructor() {
        super();

        this.state = {
            blogs: []
        };
    };

    componentDidMount() {
        axios.get('/posts.json')
            .then(response => console.log(response))
            .catch(error => console.log(error));
    };

    render() {
        return (
            <div
                css={tw`mx-24 p-12 rounded-lg border border-solid border-gray-200`}
                style={{ boxShadow: '0 10px 28px rgba(0,0,0,.08)' }}
            >
                <h2>Coming Soon!</h2>
            </div>
        );
    };
};

export default Blogs;
