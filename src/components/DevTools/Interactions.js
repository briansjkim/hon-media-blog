import React, { Fragment, Component } from 'react';
import tw from 'tailwind.macro';

// possibly change to class component with like, comment, share features
    // maybe split each feature into its own component?
class Interactions extends Component {
    state = {
        likes: 0,
        comments: 0,
        shares: 0
    };

    handleLike() {

    };

    handleComment() {

    };

    handleShare() {

    };

    render() {
        return (
            <Fragment>
                <button css={tw`mr-4`}>Like</button>
                <button css={tw`mr-4`}>Comment</button>
                <button>Share</button>
            </Fragment>
        )
    }
};

// const Interactions = () => (
//     <Fragment>
//         <p css={tw`mr-4`}>Like</p>
//         <p css={tw`mr-4`}>Comment</p>
//         <p>Share</p>
//     </Fragment>
// );

export default Interactions;
