import React, { Component } from "react";
import tw from "tailwind.macro";
import axios from '../../../../axios-instance';

import Comment from './Comment';

class CommentSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: '',
            comments: [],
            author: ''
        };

        this.getComments = this.getComments.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkValidity = this.checkValidity.bind(this);
    };

    // handleClose(e) {
    //     this.props.onClose && this.propse.onClose(e);
    // };

    componentDidMount() {
        console.log(this.props);
        // this.getComments();
    };

    getComments() {
        axios.get(`/posts.json?orderBy="title"&startAt="${this.props.blog.title}"&print=pretty`)
            .then((res) => {
                // this.setState({
                //     childName: Object.keys(res.data)[0],
                // });
            })
            .catch((err) => console.error(err));
    };

    handleChange(e) {
        // console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmit() {
        
    };

    checkValidity() {
        const { comment, author } = this.state;

        return ( comment.length > 0 && author.length > 0);
    };

    render() {
        if (!this.props.show) {
            return null;
        };

        const isValid = this.checkValidity();

        return (
            <div 
                // css={tw`h-full w-2/5 bg-white fixed top-0 right-0 z-50 shadow`}
                // style={{ transform: 'translateX(100%)', transition: 'transform 0.3s ease-out'}}
            >
                <div>
                    <h1>Comments</h1>
                </div>
                <form>
                    <div css={tw`leading-8`}>
                        <textarea
                            type="textarea"
                            id="comment"
                            placeholder="Write a comment"
                            value={this.state.comment}
                            onChange={this.handleChange}
                            css={tw`border-2 border-solid border-gray-400 rounded-lg`}
                            style={{
                                width: "740px",
                                fontSize: "16px",
                                fontFamily: "Poppins",
                                overflow: "hidden",
                            }}
                            required
                        />
                    </div>
                    <div css={tw`leading-8`}>
                        <textarea
                            type="textarea"
                            id="author"
                            placeholder="Name"
                            value={this.state.author}
                            onChange={this.handleChange}
                            css={tw`border-2 border-solid border-gray-400 rounded-lg`}
                            style={{ width: '740px', height: '35px', fontSize: '16px', fontFamily: 'Poppins'  }}
                            required
                        />
                    </div>
                    <button
                        type="button"
                        id="submit"
                        // onClick={isValid ? this.handleSubmit : null }
                        name="submit"
                        css={tw`bg-purple-500 rounded-full border-0 cursor-pointer`}
                        style={{ width: '91px', height: '40px', fontFamily: 'Poppins',  color: 'white', alignItems: 'center', textAlign: 'center' }}
                        >
                            POST
                    </button>
                </form>
                <Comment />
            </div>
        );
    };
};

export default CommentSection;
