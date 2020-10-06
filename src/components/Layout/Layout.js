import React, { Fragment } from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
    <Fragment>
        <Header />
        <main className="text-gray-900">{children}</main>
        <Footer />
    </Fragment>
);

export default Layout;
