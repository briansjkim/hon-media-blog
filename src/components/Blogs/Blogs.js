import React, { Component } from "react";
import tw from "tailwind.macro";

class Blogs extends Component {
    constructor() {
        super();

        this.state = {
            blogs: []
        };
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

// const Blogs = () => (
//     <div
//         css={tw`mx-24 p-12 rounded-lg border border-solid border-gray-200`}
//         style={{ boxShadow: '0 10px 28px rgba(0,0,0,.08)' }}
//     >
//         <h2>Coming Soon!</h2>
//     </div>
// );

export default Blogs;
