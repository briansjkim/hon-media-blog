import React, { Fragment } from 'react';
import Header from '../components/Layout/Header';
import UserLogin from '../components/Auth/UserAcc/UserAcc';

export default function userLogin() {
    return (
        <Fragment>
            <Header />
            <UserLogin />
        </Fragment>
    );
};

