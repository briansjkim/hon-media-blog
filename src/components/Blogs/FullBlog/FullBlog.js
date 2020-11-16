import React, { Component } from 'react';
import tw from 'tailwind.macro';
import axios from '../../../axios-instance';

import ShareModal from '../../DevTools/ShareModal';
import Interactions from '../Interactions/Interactions';
import CommentSection from '../Interactions/Comments/CommentSection';

class FullBlog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            childName: '',
            likes: null,
            showShares: false,
            showComments: false
        }

        this.getBlog = this.getBlog.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.handleShare = this.handleShare.bind(this);
        this.openComments = this.openComments.bind(this);
    };

    componentDidMount() {
        this.getBlog();
        console.log(this.props)
    };

    getBlog() {
        axios.get(`/posts.json?orderBy="title"&startAt="${this.props.blog.title}"&print=pretty`)
            .then((res) => {
                this.setState({
                    childName: Object.keys(res.data)[0],
                    likes: Object.values(res.data)[0].likes,
                    shares: Object.values(res.data)[0].shares
                });
            })
            .catch((err) => console.error(err));
    };

    // need to handle unliking as well
    handleLike() {
        let newLikes = this.props.blog.likes + 1;
        axios.patch(`/posts/${this.state.childName}/.json`, {
            likes: newLikes,
        })
            .then(() => this.getBlog())
            .catch((err) => console.error(err));
    };

    // needs to actually share content still
    handleShare(e) {
        // let newShares = this.props.blog.shares + 1;
        // axios.patch(`/posts/${this.state.childName}/.json`, {
        //     shares: newShares,
        // })
        //     .then(() => this.getBlog())
        //     .catch((err) => console.error(err));
        this.setState({
            showShares: !this.state.showShares
        });
    };

    openComments() {
        // sliding comment section
        this.setState({
            showComments: !this.state.showComments
        });
    };

    render() { 
        return (
            <div
                css={tw`text-center mb-16`}
                style={{ fontFamily: 'Poppins'}}
            >
                <ShareModal onClose={this.handleShare} show={this.state.showShares}/>
                <div
                    css={tw`w-4/5 block m-auto`}
                >
                    <img 
                        alt="Blog" 
                        src={this.props.blog.image}
                        style={{ objectFit: 'scale-down', maxWidth: '100%' }}
                    />
                </div>
                <div> 
                    <div css={tw`w-1/2 m-auto text-left`}>
                        <h1
                            style={{ fontWeight: '500', fontSize: '38px'}}
                        >
                            {this.props.blog.title}
                        </h1>
                    </div>
                    <div css={tw`w-1/2 flex m-auto`}>
                        <div 
                            css={tw`w-1/2 float-left mr-10 text-left`}>
                            <p>{this.props.blog.name}</p>
                            <p>{this.props.blog.date}</p>
                        </div>
                        <div css={tw` w-1/2 flex justify-end`}>
                            <Interactions likes={this.state.likes} handleLike={this.handleLike} handleShare={this.handleShare} openComments={this.openComments} />
                        </div>
                    </div>
                </div>
                <div css={tw`w-1/2 m-auto mt-6 text-left`}>
                    <p css={tw`whitespace-pre-line`}>{this.props.blog.content}</p>
                </div>
                <div css={tw`flex w-1/2 m-auto mt-10`}>
                    {/* <Interactions blog={this.props.blog} /> */}
                </div>
                <div>
                    <CommentSection onClose={this.openComments} show={this.state.showComments} blog={this.props.blog} />
                </div>
            </div>
        );
    };
};

export default FullBlog;
