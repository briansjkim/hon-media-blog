import React, { Fragment } from 'react';
import tw from 'tailwind.macro';

import customerData from '../assets/data/customer-data';
import Header from '../components/Layout/Header';
import StoryCards from '../components/StoryCards/StoryCards';

export default function stories() {
    return (
        <Fragment>
            <Header />
            <div css={tw`flex flex-col `}>
                <StoryCards customers={customerData} />
            </div>
        </Fragment>
    );
};
