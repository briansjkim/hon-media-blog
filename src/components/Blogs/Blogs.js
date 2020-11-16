import React, { Component } from "react";
import tw from "tailwind.macro";
import axios from '../../axios-instance';

import FeaturedBlog from './FeaturedBlogs/FeaturedBlog';
import SelectedBlog from './FeaturedBlogs/SelectedBlog';
import Blog from './Blog';
import Loading from '../UI/Loading';
import EditModal from '../DevTools/EditModal';

class Blogs extends Component {
    constructor() {
        super();

        this.state = {
            blogs: [],
            featureds: [],
            selected: {},
            loading: true,
            showModal: false,
            editedBlog: {}
        };

        this.handleChoose = this.handleChoose.bind(this);
        this.editBlog = this.editBlog.bind(this);
        this.getBlogs = this.getBlogs.bind(this);
        this.changeFeatured = this.changeFeatured.bind(this);
        this.deleteBlog = this.deleteBlog.bind(this);
        this.showModal = this.showModal.bind(this);
        this.timeSince = this.timeSince.bind(this);
    };

    componentDidMount() {
        this.getBlogs();
    };
    
    getBlogs() {
        axios.get('/posts.json')
            .then((res) => {
                const childNamesArray = Object.keys(res.data);
                const blogsArray = Object.values(res.data);
                for(let i = 0; i < blogsArray.length; i++) {
                    blogsArray[i].childName = childNamesArray[i];
                }

                const featured = [];
                for(let i = 0; i < blogsArray.length; i++) {
                    if (blogsArray[i].isFeatured) {
                        featured.push(blogsArray[i]);
                    };
                };

                this.setState({
                    blogs: blogsArray,
                    featureds: featured,
                    loading: false
                });
            })
            .catch(error => console.log(error));
    }

    handleChoose(title) {
        for(let i = 0; i < this.state.featureds.length; i++) {
            if (this.state.featureds[i].title === title) {
                this.setState({
                    selected: this.state.featureds[i]
                })
            }
        }
    };

    editBlog(blog) {
        this.setState({
            editedBlog: blog
        });
        this.showModal();
    }

    changeFeatured(featured, childName) {
        axios.patch(`/posts/${childName}/.json`, {
            isFeatured: featured,
        })
            .then(() => this.getBlogs())
            .catch((err) => console.error(err));
    }

    deleteBlog(childName) {
        axios.delete(`/posts/${childName}/.json`)
            .then(() => window.location.reload())
            .catch((err) => console.error(err));
    }

    showModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    };

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
                // Christie code below
                // style={{ marginLeft: '10%', width: '100%'}}
                style={{ width: '100% '}}
            >
                <EditModal onClose={this.showModal} changeFeatured={this.changeFeatured} deleteBlog={this.deleteBlog} show={this.state.showModal} blog={this.state.editedBlog} />
                {this.state.loading ? 
                    <Loading />
                        :
                    <div
                        css={tw`rounded-lg border border-gray-200`}
                        style={{ width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', boxShadow: '0 10px 28px rgba(0,0,0,.08)', overflow: 'hidden' }}
                    >  
                        <h1
                            css={tw`text-center mb-12`}
                            style={{ fontSize: '40px', flex: '0 0 100%' }}
                        >
                            Featured
                        </h1>
                        <div
                            style={{ height: '500px', overflow: 'hidden' }}
                        >
                            {this.state.featureds.map((blog, idx) => 
                                <FeaturedBlog blog={blog} key={idx} clickHandler={this.handleChoose} timeAgo={this.timeSince} edit={this.editBlog} />
                            )}
                        </div>
                        <SelectedBlog blog={this.state.selected} timeAgo={this.timeSince} edit={this.editBlog} />
                        <h1
                            style={{ fontSize: '40px', flex: '0 0 100%' }}
                        >
                            All
                        </h1>
                        {this.state.blogs.map((blog, idx) =>
                            <Blog blog={blog} key={idx} timeAgo={this.timeSince} edit={this.editBlog} />
                        )}
                    </div>
                }
            </div>
        );
    };
};


export default Blogs;
