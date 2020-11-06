import React, { Fragment } from 'react';
import tw from 'tailwind.macro';

// possibly change to class component with like, comment, share features
    // maybe split each feature into its own component?

const Interactions = () => (
    <Fragment>
        <p css={tw`mr-4`}>Like</p>
        <p css={tw`mr-4`}>Comment</p>
        <p>Share</p>
    </Fragment>
);

export default Interactions;
