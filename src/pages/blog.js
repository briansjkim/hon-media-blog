import React from 'react';
import tw from 'tailwind.macro';

export default function blogs({ location }) {
    const blog = location.state.blog;
    console.log(blog);

    return (
        <div>
            <div>
                <h2>{blog.title}</h2>
            </div>
            <div css={tw`flex`}>
                <div css={tw`float-left mr-10`}>
                    <p>{blog.name}</p>
                    <p>Month, Date</p>
                </div>
                <div css={tw`float-left flex`}>
                    <p>Like</p>
                    <p>Comment</p>
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
};
