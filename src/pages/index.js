import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout/Layout';

export default () => (
    <Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Hon Media | Blog</title>
        </Helmet>
        <div>
            <p>Hi there</p>
        </div>
    </Layout>
);
