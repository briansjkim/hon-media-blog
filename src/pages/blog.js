import React, { Fragment } from 'react';

import Header from '../components/Layout/Header';
import FullBlog from '../components/Blogs/FullBlog/FullBlog';
import SideDrawer from '../components/Layout/SideDrawer';

export default function blogs({ location }) {
    const { state = {} } = location;
    const { blog } = (state) ? state : {};
    return blog ? (
        <Fragment>
            <SideDrawer />
            <Header />
            <FullBlog blog={location.state.blog} />
        </Fragment>
    ) : (
        <Fragment>
            <SideDrawer />
            <Header />
            <FullBlog />
        </Fragment>
    )
};
