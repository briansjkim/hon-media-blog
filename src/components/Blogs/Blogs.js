import React, { Component } from "react";
import tw from "tailwind.macro";
import axios from '../../axios-instance';

import FeaturedBlog from './FeaturedBlog';
import SelectedBlog from './SelectedBlog';
import Blog from './Blog';
import Spinner from '../UI/Spinner';
import EditModal from '../DevTools/EditModal';

class Blogs extends Component {
    constructor() {
        super();

        this.state = {
            blogs: [],
            featureds: [],
            selected: {},
            loading: true,
            showModal: false
        };

        this.handleChoose = this.handleChoose.bind(this);
        this.showModal = this.showModal.bind(this);
        this.timeSince = this.timeSince.bind(this);
    };

    componentDidMount() {
        const { blogs } = this.state;
        axios.get('/posts.json')
            .then((res) => {
                const blogsArray = Object.values(res.data);
                const updatedBlogs = blogs.concat(blogsArray);

                const featured = [];
                for(let i = 0; i < updatedBlogs.length; i++) {
                    if (updatedBlogs[i].isFeatured) {
                        featured.push(updatedBlogs[i]);
                    };
                };

                this.setState({
                    blogs: updatedBlogs,
                    featureds: featured,
                    loading: false
                });
            })
            .catch(error => console.log(error));
    };

    handleChoose(title) {
        for(let i = 0; i < this.state.featureds.length; i++) {
            if (this.state.featureds[i].title === title) {
                this.setState({
                    selected: this.state.featureds[i]
                })
            }
        }
    };

    showModal(e) {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    timeSince(date) {
        const seconds = Math.floor(((new Date().getTime()/1000) - date));
      
        let interval = seconds / 31536000;
      
        if (interval >= 1) {
          return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval >= 1) {
          return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval >= 1) {
          return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval >= 1) {
          return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval >= 1) {
          return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    };

    render() {
        if(Object.keys(this.state.selected).length === 0 && !this.state.loading) {
            this.setState({
                selected: this.state.featureds[0]
            });
        };

        return (
            <div
                style={{ marginLeft: '10%', marginRight: '5%' }}
            >
                <EditModal onClose={this.showModal} show={this.state.showModal} />
                {this.state.loading ? 
                    <Spinner />
                        :
                    <div
                        css={tw`rounded-lg border border-gray-200`}
                        style={{ width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', boxShadow: '0 10px 28px rgba(0,0,0,.08)' }}
                    >  
                        <h1
                            style={{ fontSize: '40px', flex: '0 0 100%' }}
                        >
                            Featured
                        </h1>
                        <div
                            css={tw`overflow-y-auto`}
                            style={{ height: '500px' }}
                        >
                            {this.state.featureds.map((blog, idx) => 
                                <FeaturedBlog blog={blog} key={idx} clickHandler={this.handleChoose} timeAgo={this.timeSince} edit={this.showModal} />
                            )}
                        </div>
                        <SelectedBlog blog={this.state.selected} timeAgo={this.timeSince} edit={this.showModal} />
                        <h1
                            style={{ fontSize: '40px', flex: '0 0 100%' }}
                        >
                            All
                        </h1>
                        {this.state.blogs.map((blog, idx) =>
                            <Blog blog={blog} key={idx} timeAgo={this.timeSince} edit={this.showModal} />
                        )}
                    </div>
                }
            </div>
        );
    };
};


export default Blogs;
