import React, { Component } from 'react';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

class DevTools extends Component {
    constructor() {
        super();
      
        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    };
    
    // showMenu(event) {
    //     event.preventDefault();

    //     this.setState({ showMenu: true }, () => {
    //         document.addEventListener('click', this.closeMenu);
    //     });
    // };
    showMenu() {
        this.setState(prevState => {
            return { showMenu: !prevState.showMenu }
        });
    };

    closeMenu() {
        this.setState(prevState => {
            return { showMenu: !prevState.showMenu }
        });
    };
    
    // closeMenu(event) {
    //     if (!this.dropdownMenu.contains(event.target)) {
    //         this.setState({ showMenu: false }, () => {
    //             document.removeEventListener('click', this.closeMenu);
    //         });  
    //     };
    // };

    render() {
        return (
            <div
                css={tw`px-2 lg:px-4 no-underline text-black relative hover:text-blue-500 hover:text-opacity-75`}
            >
                <button
                    // onClick={this.showMenu}
                    onMouseEnter={this.showMenu}
                    css={tw`border-none bg-white`}
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
                        css={tw`absolute`}
                    >
                        <Link
                            to='/createpost'
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