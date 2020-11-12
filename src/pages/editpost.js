import React from 'react';

import EditPost from '../components/DevTools/Post/EditPost';
import Layout from '../components/Layout/Layout';

export default function editpost({ location }) {
    const { state = {} } = location;
    const { blog } = state;

    return (
        blog ? (
            <Layout>
                <EditPost blog={location.state.blog} />
            </Layout>
        ) : (
            <div>This is just here for CircleCI</div>
        )
    );
};
