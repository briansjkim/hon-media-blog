import React, { Component } from 'react';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

// IF YOU CAN
    // try to make dropdown menu wider so that each feature has its own line

class DevTools extends Component {
    constructor() {
        super();

        
        this.state = {
            showMenu: false,
        };
        
        this.handleClick = this.handleClick.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    };

    toggleMenu() {
        this.setState(prevState => {
            return { showMenu: !prevState.showMenu}
        });
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
                aria-hidden="true"
                onMouseEnter={this.toggleMenu}
                onMouseLeave={this.toggleMenu}
                css={tw`ml-4 mr-4 px-2 lg:px-4 no-underline text-black relative`}
            >
                <button
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
                        css={tw`absolute border-solid border-gray-200 bg-white shadow w-full`}
                        style={{boxShadow: '0 2px 3px #ccc'}}
                    >
                        <ul css={tw`list-none`}>
                            <li>
                                <Link
                                    to='/createpost'
                                    css={tw`text-sm text-left no-underline text-black`}
                                >
                                    Create Post
                                </Link>
                            </li>
                        </ul>
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