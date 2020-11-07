import React, { Fragment } from 'react';

import Header from '../components/Layout/Header';
import FullBlog from '../components/Blogs/FullBlog';
import SideDrawer from '../components/Layout/SideDrawer';

export default function blogs({ location }) {
    if (!location.state.blog) {
        return null;
    }

    return (
        <Fragment>
            <SideDrawer />
            <Header />
            <FullBlog blog={location.state.blog} />
        </Fragment>
    );
};
