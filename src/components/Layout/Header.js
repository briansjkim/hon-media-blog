import React from "react";
import tw from 'tailwind.macro';
// import { Link } from 'gatsby';

import Logo from '../../assets/images/HonLogo.png';
// will hold a search feature, home feature (hon media home site), login/sign up?

const Header = () => (
    <header css={tw`sticky top-0 bg-white shadow`}>
        <div css={tw`container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8`}>
            <div css={tw`flex items-center text-3xl`}>
                <img
                    css={tw`mx-auto`}
                    src={Logo}
                    alt="logo"
                    style={{ height: '40px' , width: '60px'}}
                />
            </div>
        </div>
    </header>
);

export default Header;
