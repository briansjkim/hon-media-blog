import React, { Fragment } from 'react';
// import tw from 'tailwind.macro';

import Header from '../components/Layout/Header';
// import Interactions from '../components/DevTools/Interactions';
import FullBlog from '../components/Blogs/FullBlog';
import SideDrawer from '../components/Layout/SideDrawer';

export default function blogs({ location }) {
    console.log(location)
    return (
        <Fragment>
            <SideDrawer />
            <Header />
            <FullBlog blog={location.state.blog} />
        </Fragment>
    );
};
