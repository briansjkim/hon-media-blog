import React, { Fragment } from 'react';
import tw from 'tailwind.macro';

import customerData from '../assets/data/customer-data';
import Layout from '../components/Layout/Layout';
import StoryCards from '../components/StoryCards/StoryCards';

export default function stories() {
    return (
        <Layout>
            <Fragment>
                <div css={tw`flex flex-col m-auto`}>
                    <StoryCards customers={customerData} />
                </div>
            </Fragment>
        </Layout>
    );
};
