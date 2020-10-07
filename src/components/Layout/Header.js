import React from "react";
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

import Logo from '../../assets/images/HonLogo.png';
// will hold a search feature, home feature (hon media home site), login/sign up?

const Header = () => (
    <header css={tw`sticky top-0 bg-white shadow`}>
        <div className="container" css={tw`flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8`}>
            <div css={tw`flex items-center text-3xl`}>
                <img
                    css={tw`mx-auto`}
                    src={Logo}
                    alt="logo"
                    style={{ height: '40px' , width: '60px'}}
                />
            </div>
            <div css={tw`flex mt-4 sm:mt-0`}>
                <Link 
                    to='/'
                    css={tw`px-2 lg:px-4 no-underline text-black hover:text-blue-500 hover:text-opacity-75`}
                >
                    Home
                </Link>
                <Link 
                    to='https://hon-media.com/'
                    target='_blank'
                    css={tw`px-2 lg:px-4 no-underline text-black hover:text-blue-500 hover:text-opacity-75`}
                >
                    About Us
                </Link>
            </div>
        </div>
    </header>
);

export default Header;
