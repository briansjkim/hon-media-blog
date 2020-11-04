import React, { Component } from 'react';
import tw from 'tailwind.macro';

class DevTools extends Component {
    constructor() {
        super();
      
        this.state = {
            showMenu: false,
        };
      
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
    
    showMenu(event) {
        event.preventDefault();
      
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }
    
    closeMenu(event) {
      
        if (!this.dropdownMenu.contains(event.target)) {
        
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });  
        
        }
    }
  
    render() {
        return (
            <div
                css={tw`px-2 lg:px-4 no-underline text-black relative hover:text-blue-500 hover:text-opacity-75`}
            >
                <button 
                    onClick={this.showMenu}
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
                        <button> Create Post </button>
                        <button> Create Success Story </button>
                        <button> Manage Home Page </button>
                        <button> Manage Posts </button>
                        <button> Drafts </button>
                        <button> Hidden </button>
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