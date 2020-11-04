import React, { Component } from 'react';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

class DevTools extends Component {
    constructor() {
        super();

        
        this.state = {
            showMenu: false,
        };
        
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    };

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    };

    setWrapperRef(node) {
        this.wrapperRef = node;
    };

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                showMenu: false
            });
        };
    };

    handleClick() {
        this.setState(prevState => {
            return {
                showMenu: !prevState.showMenu
            };
        });
    };

    render() {
        return (
            <div
            // css={tw`px-2 lg:px-4 no-underline text-black relative`}
            >
                <button
                    ref={this.setWrapperRef}
                    onClick={this.handleClick}
                    css={tw`text-sm font-medium border-none bg-white outline-none hover:text-blue-500 hover:text-opacity-75`}
                >
                    DEV TOOLS
                </button>
            {
                this.state.showMenu
                ? (
                    <div
                        className="menu"
                        ref={(element) => {
                            this.dropdownMenu = element;
                        }}
                        css={tw`absolute border-solid bg-white shadow`}
                    >
                        <Link
                            to='/createpost'
                            onClick={this.closeMenu}
                            css={tw`text-xs px-2 lg:px-4 no-underline text-black hover:text-blue-500 hover:text-opacity-75 mr-12`}
                        >
                            Create Post
                        </Link>
                    </div>
                ) : ( 
                    null
                )
            }
        </div>
        );
    }
}

export default DevTools;