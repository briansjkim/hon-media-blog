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
            css={tw`sm:m-auto sm:mt-16 sm:text-center`}
            style={{ overflow: 'hidden', width: '100%'}}
        >
            <Blogs />
        </section>
    </Layout>
);
