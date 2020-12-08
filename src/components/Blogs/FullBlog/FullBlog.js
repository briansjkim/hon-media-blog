import React, { Component } from 'react';
import Linkify from 'react-linkify';
import tw from 'tailwind.macro';
import axios from '../../../axios-instance';

import ShareModal from '../../DevTools/ShareModal';
import Interactions from '../Interactions/Interactions';
import CommentSection from '../Interactions/Comments/CommentSection';
import componentDecorator from './componentDecorator';

class FullBlog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            childName: '',
            image: '',
            date: '',
            content: '',
            likes: null,
            showShares: false,
            showComments: false
        }

        this.getBlog = this.getBlog.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.handleShare = this.handleShare.bind(this);
        this.toggleComments = this.toggleComments.bind(this);
    };

    componentDidMount() {
        const title = decodeURI(window.location.pathname).slice(6);
        this.setState({
            title: title,
        })
        this.getBlog(title);
    };

    getBlog(title) {
        axios.get(`/posts.json?orderBy="title"&equalTo="${title}"&print=pretty`)
            .then((res) => {
                this.setState({
                    childName: Object.keys(res.data)[0],
                    image: Object.values(res.data)[0].image,
                    name: Object.values(res.data)[0].name,
                    date: Object.values(res.data)[0].date,
                    content: Object.values(res.data)[0].content,
                    likes: Object.values(res.data)[0].likes,
                    shares: Object.values(res.data)[0].shares,
                });
            })
            .catch((err) => console.error(err));
    };

    // need to handle unliking as well
    handleLike() {
        let newLikes = this.state.likes + 1;
        axios.patch(`/posts/${this.state.childName}/.json`, {
            likes: newLikes,
        })
            .then(() => this.getBlog())
            .catch((err) => console.error(err));
    };

    handleShare(e) {
        this.setState({
            showShares: !this.state.showShares
        });
    };

    toggleComments() {
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
                <ShareModal onClose={this.handleShare} show={this.state.showShares} blogTitle={this.state.title}/>
                <div
                    css={tw`w-4/5 block m-auto`}
                >
                    <img 
                        alt="Blog" 
                        src={this.state.image}
                        style={{ objectFit: 'scale-down', maxWidth: '100%' }}
                    />
                </div>
                <div> 
                    <div css={tw`w-1/2 m-auto text-left`}>
                        <h1
                            style={{ fontWeight: '500', fontSize: '38px'}}
                        >
                            {this.state.title}
                        </h1>
                    </div>
                    <div css={tw`w-1/2 flex m-auto`}>
                        <div 
                            css={tw`w-1/2 float-left mr-10 text-left`}>
                            <p>{this.state.name}</p>
                            <p>{this.state.date}</p>
                        </div>
                        <div css={tw` w-1/2 flex justify-end`}>
                            <Interactions likes={this.state.likes} handleLike={this.handleLike} handleShare={this.handleShare} toggleComments={this.toggleComments} />
                        </div>
                    </div>
                </div>
                <div css={tw`w-1/2 m-auto mt-6 text-left`}>
                    <Linkify componentDecorator={componentDecorator}>
                        <p css={tw`whitespace-pre-line`}>{this.state.content}</p>
                    </Linkify>
                </div>
                <div css={tw`flex w-1/2 m-auto mt-10`}>
                    {/* <Interactions blog={this.props.blog} /> */}
                </div>
                <div>
                    <CommentSection onClose={this.toggleComments} show={this.state.showComments} blog={this.state} />
                </div>
            </div>
        );
    };
};

export default FullBlog;
