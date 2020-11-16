import React, { Component } from "react";
import tw from "tailwind.macro";

import Comment from './Comment';

class CommentSection extends Component {
    constructor() {
        super();

        this.state = {
            comment: '',
            author: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkValidity = this.checkValidity.bind(this);
    };

    handleChange() {

    };

    handleSubmit() {

    };

    checkValidity() {
        const { comment, author } = this.state;

        return ( comment.length > 0 && author.length > 0);
    };

    render() {
        const isValid = this.checkValidity();

        return (
            <div>
                <div>
                    <h1>Comments</h1>
                </div>
                <form>
                    <div css={tw`leading-8`}>
                        <textarea
                            type="textarea"
                            id="comments"
                            placeholder="Write a comment"
                            // value={this.state.comment}
                            // onChange={this.handleKeyDown}
                            css={tw`border-2 border-solid border-gray-400 rounded-lg`}
                            style={{
                                width: "740px",
                                fontSize: "16px",
                                fontFamily: "Poppins",
                                overflow: "hidden",
                            }}
                            required
                        />
                    </div>
                    <div css={tw`leading-8`}>
                        <textarea
                            type="textarea"
                            id="author"
                            placeholder="Name"
                            // value={this.state.author}
                            // onChange={this.handleChange}
                            css={tw`border-2 border-solid border-gray-400 rounded-lg`}
                            style={{ width: '740px', height: '35px', fontSize: '16px', fontFamily: 'Poppins'  }}
                            required
                        />
                    </div>
                    <button
                        type="button"
                        id="submit"
                        // onClick={isValid ? this.handleSubmit : null }
                        name="submit"
                        css={tw`bg-purple-500 rounded-full border-0 cursor-pointer`}
                        style={{ width: '91px', height: '40px', fontFamily: 'Poppins',  color: 'white', alignItems: 'center', textAlign: 'center' }}
                        >
                            POST
                    </button>
                </form>
                <Comment />
            </div>
        );
    };
};

export default CommentSection;
