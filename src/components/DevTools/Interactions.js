import React, { Fragment } from 'react';
import tw from 'tailwind.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';

const Interactions = ({ likes, shares, handleLike, handleShare }) => (
    <Fragment>
        <button
            css={tw`bg-purple-500 rounded-full border-0 cursor-pointer mr-4`}
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
                css={tw`bg-purple-500 rounded-full border-0 cursor-pointer mr-4`}
                style={{ width: '91px', height: '40px', fontFamily: 'Poppins',  color: 'white', alignItems: 'center', textAlign: 'center' }}
            >
                <FontAwesomeIcon 
                    css={tw`mr-2`}
                    icon={faComment} 
                />
                {blog.comments}
            </button> */}
        <button
            css={tw`bg-purple-500 rounded-full border-0 cursor-pointer`}
            style={{ width: '91px', height: '40px', fontFamily: 'Poppins',  color: 'white', alignItems: 'center', textAlign: 'center' }}
            onClick={handleShare}
        >
            <FontAwesomeIcon 
                css={tw`mr-2`}
                icon={faShare} 
            />
            {shares}
        </button>
    </Fragment>
);

export default Interactions;
