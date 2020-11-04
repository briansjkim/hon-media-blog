import React, { Component } from 'react';

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
                <form role="form">
                    <br styles="clear:both" />
                    <div className="form-group">
                        <input type="text" id="title" name="title" placeholder="Title" required />
                    </div>
                    
                    <div className="form-group">
                        <textarea type="textarea" id="content" placeholder="Content" maxlength="140" rows="7"></textarea>
                    </div>
                    
                    <button type="button" id="submit" name="submit" className="btn btn-primary pull-right">Add Post</button>
                </form>
            </div>
        );
    };
}

export default CreatePost;