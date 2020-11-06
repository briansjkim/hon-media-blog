import React from 'react';
import tw from 'tailwind.macro';

import Interactions from '../DevTools/Interactions';

const FullBlog = ({ blog }) => {
    return (
        <div
                css={tw`text-center mb-16`}
                style={{ fontFamily: 'Poppins'}}
            >
                <div> 
                    <div css={tw`w-1/2 m-auto text-left`}>
                        <h1
                            style={{ fontWeight: '500', fontSize: '38px'}}
                        >
                            {blog.title}
                        </h1>
                    </div>
                    <div css={tw`w-1/2 flex m-auto`}>
                        <div 
                            css={tw`w-1/2 float-left mr-10 text-left`}>
                            <p>{blog.name}</p>
                            <p>{blog.date}</p>
                        </div>
                        <div css={tw` w-1/2 flex justify-end`}>
                            <Interactions blog={blog} />
                        </div>
                    </div>
                </div>
                <div>
                    <img 
                        alt="Blog" 
                        src={blog.image}
                        width="400"
                        height="400"
                    />
                </div>
                <div css={tw`w-1/2 m-auto mt-6 text-left`}>
                    <p css={tw`whitespace-pre-line`}>{blog.content}</p>
                </div>
            <div css={tw`flex w-1/2 m-auto`}>
                <Interactions />
            </div>
        </div>
    )
};

export default FullBlog;
