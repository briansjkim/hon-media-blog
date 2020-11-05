import React, { Component } from 'react';
import tw from 'tailwind.macro';

class CreatePost extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            content: '',
            name: '',
            tags: '',
            isFeatured: true,
            commentsEnabled: true,
        };
    };

    render() {
        return (
            <div>
                <div css={tw`tracking-wide w-740px h-60px font-semibold text-4xl text-gray-800 leading-10`}>
                    Create New Post
                </div>
                <form>
                    <div 
                        css={tw`tracking-wide leading-8 mb-6`}
                    >
                        TEXT & CONTENT
                        <br/>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Title"
                            css={tw`border-2 border-solid border-gray-400 rounded-lg`}
                            style={{ width: '740px', fontSize: '24px', fontFamily: 'Poppins'  }}
                            required
                        />
                    </div>
                    <div css={tw`leading-8`}>
                        <textarea
                            type="textarea"
                            id="content"
                            placeholder="Content"
                            maxLength="140"
                            rows="7"
                            css={tw`border-2 border-solid border-gray-400 rounded-lg`}
                            style={{ top: '360px', width: '740px', fontSize: '16px', fontFamily: 'Poppins'  }}
                            required
                        >
                        </textarea>
                    </div>
                    
                    <button
                        type="button"
                        id="submit"
                        name="submit"
                        css={tw`bg-purple-500 rounded-full border-0`}
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