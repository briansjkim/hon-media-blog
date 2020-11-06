import React, { Fragment } from 'react';

import CreatePost from '../components/DevTools/Post/CreatePost';
import Layout from '../components/Layout/Layout';

export default function createpost() {
    return (
        <Layout>
            <Fragment>
                <CreatePost />
            </Fragment>
        </Layout>
    );
};
