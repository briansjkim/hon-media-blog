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
        <div css={tw`border-dashed`}>
            <p css={tw`font-semibold text-lg`}>Welcome</p>
        </div>
    </Layout>
);
