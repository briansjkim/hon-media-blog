import React from 'react';
import { Helmet } from 'react-helmet';
import tw from 'tailwind.macro';

import Layout from '../components/Layout/Layout';
import Blogs from '../components/Blogs/Blogs';

export default () => (
    <Layout>
        <Helmet>
            <title>Hon Media | Blog Site</title>
            <meta charSet="utf-8" content="width=device-width, initial-scale=1.0"/>
            <meta
                name="Description"
                content="Blog site for Hon Media" />
        </Helmet>
        <section 
            className="container"
            css={tw`sm:m-auto sm:mt-16 sm:text-center`}
            // Christie code
            // style={{ overflow: 'hidden', width: '100%'}}
        >
            <Blogs />
        </section>
    </Layout>
);
