import React, { Component } from 'react';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTools } from '@fortawesome/free-solid-svg-icons';

class DevTools extends Component {
    constructor() {
        super();
        this.state = {
            showMenu: false,
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    };

    toggleMenu() {
        this.setState(prevState => {
            return { showMenu: !prevState.showMenu}
        });
    };

    render() {
        return (
            <div
                aria-hidden="true"
                onClick={this.toggleMenu}
                // these two aren't working the way they're supposed to right now
                // onMouseEnter={this.toggleMenu}
                // onMouseLeave={this.toggleMenu}
                css={tw`w-32 ml-4 mr-4 px-2 lg:px-4 no-underline text-black relative`}
            >
                <button
                    css={tw`w-full text-sm font-medium border-none bg-white outline-none hover:text-blue-500 hover:text-opacity-75`}
                >
                    DEV <FontAwesomeIcon icon={faTools} />
                </button>
            {
                this.state.showMenu
                ? (
                    <div
                        className="menu"
                        ref={(element) => {
                            this.dropdownMenu = element;
                        }}
                        css={tw`absolute rounded-b border-gray-200 bg-white w-auto mt-4`}
                        style={{boxShadow: '0 2px 3px #ccc'}}
                    >
                        <ul css={tw`list-none p-3`}>
                            <li>
                                <FontAwesomeIcon icon={faEdit} />
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