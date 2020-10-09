import React, { Fragment } from 'react';

import Header from '../components/Layout/Header';
import Stories from '../components/StoryCards/StoryCards';

export default function stories() {
    return (
        <Fragment>
            <Header />
            <Stories />
        </Fragment>
    );
};
