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
                <div css={tw`w-740px h-60px font-poppins font-medium font-h2 text-4xl leading-10`}>
                    <h2>Create New Post</h2>
                </div>
                <form>
                    <br styles="clear:both" />
                    <div className="form-group">
                        <input type="text" id="title" name="title" placeholder="Title" required />
                    </div>
                    
                    <div className="form-group">
                        <textarea type="textarea" id="content" placeholder="Content" maxLength="140" rows="7"></textarea>
                    </div>
                    
                    <button type="button" id="submit" name="submit" className="btn btn-primary pull-right">Add Post</button>
                </form>
            </div>
        );
    };
}

export default CreatePost;