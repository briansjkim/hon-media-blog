import React from "react";
import tw from 'tailwind.macro';
import { Link } from 'gatsby';
import { isLoggedIn } from '../Auth/Auth';
import Logo from '../../assets/images/HonLogo.png';
import DevTools from '../DevTools/DevToolsDropdown';

const Header = () => (
    <header
        css={tw`sticky top-0 bg-white shadow-xl z-10 mb-16`}
        style={{ width: '105%' }}
    >
        <div>
            <Link
                to='/'
                css={tw`sm:fixed right-0 top-0 left-0`}
                style={{ width: '10%' }}
            >
                <img
                    css={tw`block m-auto pl-8 sm:pl-10`}
                    src={Logo}
                    alt="logo"
                    style={{ height: '60px', width: '60px'}}
                />
            </Link>
            <div
                css={tw`sm:flex sm:flex-col sm:flex-row justify-end items-center py-4`}
                // 
                >
                <Link 
                    to='/'
                    css={tw`hidden sm:inline sm:px-6 sm:px-4 no-underline text-black hover:text-buttonHover hover:text-opacity-75`}
                >
                    HOME
                </Link>
                <Link
                    to='/stories'
                    css={tw`px-6 mr-8 ml-8 lg:px-4 no-underline text-lg text-black hover:text-buttonHover hover:text-opacity-75`}
                >
                    SUCCESS STORIES
                </Link>
                <a 
                    href='https://hon-media.com/'
                    target='_blank'
                    css={tw`px-6 lg:px-4 no-underline text-lg text-black hover:text-buttonHover hover:text-opacity-75`}
                    rel="noreferrer noopener"
                >
                    OUR GOAL
                </a>
                { isLoggedIn() && <DevTools /> }
            </div>
        </div>
    </header>
);

export default Header;
