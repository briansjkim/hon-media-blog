import React, { Fragment } from 'react';

import Header from './Header';
import Footer from './Footer';
import SideDrawer from './SideDrawer';

const Layout = ({ children }) => (
    <Fragment>
        <Header />
        <SideDrawer />
        <main className="text-gray-900">{children}</main>
        <Footer />
    </Fragment>
);

export default Layout;
