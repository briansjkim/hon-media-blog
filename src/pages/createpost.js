import React, { Fragment } from 'react';

import Header from '../components/Layout/Header';
import CreatePost from '../components/DevTools/Post/CreatePost';

export default function createpost() {
    return (
        <Fragment>
            <Header />
            <CreatePost />
        </Fragment>
    );
};
