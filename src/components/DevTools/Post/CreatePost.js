import React, { Component } from 'react';
import tw from 'tailwind.macro';
import axios from '../../../axios-instance';
import { navigate } from 'gatsby';
// import { target } from 'tailwindcss/stubs/defaultConfig.stub';

class CreatePost extends Component {
    constructor() {
        super();

        const today = new Date();
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        this.state = {
            title: '',
            content: '',
            name: '',
            image: '',
            tags: '',
            isFeatured: true,
            commentsEnabled: true,
            date: `${monthNames[today.getMonth()]} ${today.getDay()}, ${today.getFullYear()}`,
            datetime: today.getTime()/1000,
            likes: 0,
            comments: 0,
            shares: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    };

    handleChange(e) {
        if (e.target.type === 'checkbox') {
            this.setState({
                isFeatured: !!e.target.checked
            });
        } else {
            this.setState({
                [e.target.id]: e.target.value
            });
        }
    };

    handleKeyDown(e) {
        e.target.style.height= 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;

        this.setState({
            content: e.target.value
        });
    };

    returnHome() {
        navigate('/');
    };

    submitHandler(event) {
        event.preventDefault();

        const post = {
            title: this.state.title,
            content: this.state.content,
            name: this.state.name,
            image: this.state.image,
            tags: this.state.tags,
            isFeatured: this.state.isFeatured,
            commentsEnabled: this.state.commentsEnabled,
            date: this.state.date,
            datetime: this.state.datetime,
            likes: this.state.likes,
            comments: this.state.comments,
            shares: this.state.shares
        };

        axios.post('/posts.json', post)
            .then(() => this.returnHome())
            .catch(error => console.log(error));
    };

    checkValidity() {
        const { title, content, name } = this.state;

        return ( title.length > 0 && content.length > 0 && name.length > 0) ;
    };

    render() {
        const isValid = this.checkValidity();

        return (
            <div css={tw`ml-64`}>
                <div css={tw`tracking-wide w-740px h-60px font-semibold text-4xl text-gray-800`}>
                    Create New Post
                </div>
                <form>
                    <div 
                        css={tw`tracking-wide leading-8 mb-3`}
                    >
                        TEXT & CONTENT
                        <br />
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            css={tw`border-2 border-solid border-gray-400 rounded-lg`}
                            style={{ width: '740px', fontSize: '24px', fontFamily: 'Poppins', overflowY: 'auto'  }}
                            required
                        />
                    </div>
                    <div css={tw`leading-8`}>
                        <textarea
                            type="textarea"
                            id="name"
                            placeholder="Name, Position"
                            value={this.state.name}
                            onChange={this.handleChange}
                            css={tw`border-2 border-solid border-gray-400 rounded-lg`}
                            style={{ width: '740px', fontSize: '16px', fontFamily: 'Poppins'  }}
                            required
                        />
                    </div>
                    <div css={tw`leading-8 mb-3`}>
                        <input
                            type="url"
                            id="image"
                            name="image_url"
                            placeholder="Banner Image URL"
                            value={this.state.image}
                            onChange={this.handleChange}
                            css={tw`border-2 border-solid border-gray-400 rounded-lg`}
                            style={{ width: '740px', fontSize: '16px', fontFamily: 'Poppins'  }}
                            required
                        />
                    </div>
                    <div css={tw`leading-8`}>
                        <textarea
                            type="textarea"
                            id="content"
                            placeholder="Content"
                            value={this.state.content}
                            onChange={this.handleKeyDown}
                            css={tw`border-2 border-solid border-gray-400 rounded-lg`}
                            style={{ width: '740px', fontSize: '16px', fontFamily: 'Poppins', overflow: 'hidden' }}
                            required
                        />
                    </div>
                    <div css={tw`leading-8 mb-3`}>
                        <div
                            css={tw`font-bold`}
                        >ADD TO FEATURED? (CHECKED BY DEFAULT)</div>
                        <input
                            type="checkbox"
                            id="isFeatured"
                            name="isFeatured"
                            onChange={this.handleChange}
                            css={tw`border-2 border-solid border-gray-400 rounded-lg`}
                            checked={this.state.isFeatured ? 1 : 0}
                        />
                        <label htmlFor="isFeatured"> ENABLED</label>
                    </div>
                    <button
                        type="button"
                        id="cancel"
                        onClick={this.returnHome}
                        name="cancel"
                        css={tw`border-gray-700 rounded-full cursor-pointer mr-6`}
                        style={{ width: '91px', height: '40px', fontFamily: 'Poppins', alignItems: 'center', textAlign: 'center' }}
                    >
                        CANCEL
                    </button>
                    <button
                        type="button"
                        id="submit"
                        onClick={isValid ? this.submitHandler : null }
                        name="submit"
                        css={tw`bg-purple-500 rounded-full border-0 cursor-pointer`}
                        style={{ width: '91px', height: '40px', fontFamily: 'Poppins',  color: 'white', alignItems: 'center', textAlign: 'center' }}
                    >
                        POST
                    </button>
                </form>
            </div>
        );
    };
}

export default CreatePost;
