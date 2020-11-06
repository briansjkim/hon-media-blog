import React from 'react';
import { Helmet } from 'react-helmet';
import tw from 'tailwind.macro';

import Layout from '../components/Layout/Layout';
import Blogs from '../components/Blogs/Blogs';

export default () => (
    <Layout>
        <Helmet>
            <meta charSet="utf-8" content="width=device-width, initial-scale=1.0"/>
            <title>Hon Media | Blog</title>
        </Helmet>
        <section 
            className="container"
            css={tw`mx-auto px-8 text-center`}
        >
            {/* <h1 css={tw`text-4xl lg:text-5xl xl:text-6xl font-bold leading-none`}>Featured</h1> */}
            <Blogs />
        </section>
    </Layout>
);
