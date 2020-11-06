import React, { Component } from 'react';
import tw from 'tailwind.macro';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div
                css={tw`bg-white rounded-lg border-solid border-0 overflow-hidden m-4`}
                style={{ width: '100px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)' }}
            >
                <img
                    alt="Blog"
                    src={this.props.blog.image}
                    width="100" height="100"
                />
                <p>{this.props.blog.content}</p>
            </div>
        );
    }
};

export default Blog;
