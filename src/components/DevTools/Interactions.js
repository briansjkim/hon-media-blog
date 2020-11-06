import React, { Fragment, Component } from 'react';
import tw from 'tailwind.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';

// possibly change to class component with like, comment, share features
    // maybe split each feature into its own component?
class Interactions extends Component {
    constructor(props) {
        super(props);

        this.handleLike = this.handleLike.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.handleShare = this.handleShare.bind(this);
    }

    handleLike() {
        console.log(this.props.blog)
    };

    handleComment() {

    };

    handleShare() {

    };

    render() {
        return (
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
                    </button>
            </Fragment>
        )
    }
};

export default Interactions;
