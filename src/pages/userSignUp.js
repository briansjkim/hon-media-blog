import React, { Fragment } from 'react';
import Header from '../components/Layout/Header';
import UserSignUp from '../components/Auth/UserAcc/UserSignUp';

export default function userLogin() {
    return (
        <Fragment>
            <Header />
            <UserSignUp />
        </Fragment>
    );
};
