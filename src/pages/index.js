import React from 'react';
import { Helmet } from 'react-helmet';
import tw from 'tailwind.macro';

import Layout from '../components/Layout/Layout';

export default () => (
    <Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Hon Media | Blog</title>
        </Helmet>
        <section 
            className="container"
            css={tw`mx-auto px-8 lg:flex justify-center`}
        >
            <h1 css={tw`text-4xl lg:text-5xl xl:text-6xl font-bold leading-none`}>Featured</h1>
        </section>
    </Layout>
);
