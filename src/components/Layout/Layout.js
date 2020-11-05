import React, { Fragment } from 'react';
// import tw from 'tailwind.macro';

import Header from './Header';
import Footer from './Footer';
// import SideDrawer from './SideDrawer';

const Layout = ({ children }) => (
    <Fragment>
        <Header />
        {/* <div
            className="container"
            css={tw`flex`}
        > */}
            {/* <SideDrawer /> */}
            <main className="text-gray-900">{children}</main>
        {/* </div> */}
        <Footer />
    </Fragment>
);

export default Layout;
