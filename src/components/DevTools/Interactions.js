import React, { Fragment, Component } from 'react';
import tw from 'tailwind.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';

const Interactions = ({ blog }) => (
    <Fragment>
        <button
                css={tw`bg-purple-500 rounded-full border-0 cursor-pointer mr-4`}
                style={{ width: '91px', height: '40px', fontFamily: 'Poppins',  color: 'white', alignItems: 'center', textAlign: 'center' }}
                onClick={this.handleLike}
            >
                <FontAwesomeIcon icon={faHeart} />
                {/* {this.props.blog.likes} */}
            </button>
            <button
                css={tw`bg-purple-500 rounded-full border-0 cursor-pointer mr-4`}
                style={{ width: '91px', height: '40px', fontFamily: 'Poppins',  color: 'white', alignItems: 'center', textAlign: 'center' }}
            >
                <FontAwesomeIcon icon={faComment} />
                {/* {console.log(this.props.blog.comments)} */}
            </button>
            <button
                css={tw`bg-purple-500 rounded-full border-0 cursor-pointer`}
                style={{ width: '91px', height: '40px', fontFamily: 'Poppins',  color: 'white', alignItems: 'center', textAlign: 'center' }}
            >
                <FontAwesomeIcon icon={faShare} />
                {/* {this.props.blog.shares} */}
                Share
            </button>
    </Fragment>
);

export default Interactions;
