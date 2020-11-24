import React, { Fragment } from 'react';
import tw from 'tailwind.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare, faComment } from '@fortawesome/free-solid-svg-icons';

const Interactions = ({ likes, handleLike, handleShare, toggleComments }) => (
    <Fragment>
        <button
            css={tw`outline-none bg-purple-500 rounded-full border-0 cursor-pointer mr-4`}
            style={{ width: '91px', height: '40px', fontFamily: 'Poppins',  color: 'white', alignItems: 'center', textAlign: 'center' }}
            onClick={handleLike}
        >
            <FontAwesomeIcon 
                css={tw`mr-2`}
                icon={faHeart}
            />
            {likes}
        </button>
        {/* <button
            css={tw`outline-none bg-purple-500 rounded-full border-0 cursor-pointer mr-4`}
            style={{ width: '91px', height: '40px', fontFamily: 'Poppins',  color: 'white', alignItems: 'center', textAlign: 'center' }}
            onClick={toggleComments}
        >
            <FontAwesomeIcon 
                css={tw`mr-2`}
                icon={faComment} 
            />
        </button> */}
        {/* <button
            css={tw`outline-none bg-purple-500 rounded-full border-0 cursor-pointer`}
            style={{ width: '91px', height: '40px', fontFamily: 'Poppins',  color: 'white', alignItems: 'center', textAlign: 'center' }}
            onClick={handleShare}
        >
            <FontAwesomeIcon 
                icon={faShare} 
            />
        </button> */}
    </Fragment>
);

export default Interactions;
