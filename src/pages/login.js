import React, { Fragment } from 'react';
import Header from '../components/Layout/Header';
import Login from '../components/Auth/Login';

// auth component will be used in this page
export default function login() {
    return (
        <Fragment>
            <Header />
            <Login />
        </Fragment>
    );
};
