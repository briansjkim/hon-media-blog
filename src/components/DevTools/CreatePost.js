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
                        className="form-group"
                        css={tw`tracking-wide`}
                    >
                        TEXT & CONTENT
                        <br/>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Title"
                            css={tw`border-2 border-solid border-gray-400 rounded`}
                            style={{ width: '740px', fontSize: '24px', fontFamily: 'Poppins'  }}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            type="textarea"
                            id="content"
                            placeholder="Content"
                            maxLength="140"
                            rows="7"
                            css={tw`border-2 border-solid border-gray-400 rounded`}
                            style={{ top: '360px', width: '740px', fontSize: '16px', fontFamily: 'Poppins'  }}
                            required
                        >
                        </textarea>
                    </div>
                    
                    <button type="button" id="submit" name="submit" className="btn btn-primary pull-right">Add Post</button>
                </form>
            </div>
        );
    };
}

export default CreatePost;