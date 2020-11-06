import React, { Fragment } from 'react';
import tw from 'tailwind.macro';

import Header from '../components/Layout/Header';
import Interactions from '../components/DevTools/Interactions';

export default function blogs({ location }) {
    const blog = location.state.blog;
    console.log(blog);

    return (
        <Fragment>
            <Header />
            <div css={tw`text-center`}>
                {/* all blog related  */}
                <div> 
                    {/* title, author, date, interactions */}
                    <div>
                        <h1
                            style={{ fontWeight: '100', fontSize: '38px', fontFamily: 'Poppins'}}
                        >
                            {blog.title}
                        </h1>
                    </div>

                    <div css={tw`flex border-solid`}>

                        <div css={tw`float-left mr-10 border-solid`}>
                            <p>{blog.name}</p>
                            <p>{blog.date}</p>
                        </div>

                        <div css={tw`float-left flex`}>
                            <Interactions />
                        </div>

                    </div>

                </div>

                {/* content */}
                <div css={tw`border-solid`}>
                    <p css={tw`whitespace-pre-line`}>{blog.content}</p>
                </div>

            </div>

            <div css={tw`flex`}>
                <Interactions />
            </div>

        </Fragment>
    )
};
