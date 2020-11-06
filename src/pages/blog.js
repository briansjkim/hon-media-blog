import React from 'react';
import tw from 'tailwind.macro';

import Header from '../components/Layout/Header';
import Interactions from '../components/DevTools/Interactions';

export default function blogs({ location }) {
    const blog = location.state.blog;
    console.log(blog);

    return (
        <div>
            <Header />
            <div>
                <div>
                    <h2>{blog.title}</h2>
                </div>
                <div css={tw`flex`}>
                    <div css={tw`float-left mr-10`}>
                        <p>{blog.name}</p>
                        <p>{blog.date}</p>
                    </div>
                    <div css={tw`float-left flex`}>
                        <Interactions />
                    </div>
                </div>
            </div>
            <div>
                <p css={tw`whitespace-pre-line`}>{blog.content}</p>
            </div>
            <div css={tw`flex`}>
                <Interactions />
            </div>
        </div>
    )
};
