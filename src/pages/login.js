import React, { Fragment } from 'react';
import Header from '../components/Layout/Header';
import Login from '../components/Auth/DevAcc/DevLogin';

export default function login() {
    return (
        <Fragment>
            <Header />
            <Login />
        </Fragment>
    );
};
