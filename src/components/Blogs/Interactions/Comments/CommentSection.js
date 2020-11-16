import React from "react";
import tw from "tailwind.macro";

import Comment from './Comment';

const CommentSection = () => (
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
                    // value={this.state.content}
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
            <button
                type="button"
                id="submit"
                // onClick={isValid ? this.submitHandler : null }
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

export default CommentSection;
