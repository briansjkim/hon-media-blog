import React from "react";
import tw from 'tailwind.macro';
// import { Link } from 'gatsby';

import Logo from '../../assets/images/HonLogo.png';
// will hold a search feature, home feature (hon media home site), login/sign up?

const Header = () => (
    <header css={tw`sticky top-0 bg-white shadow`}>
        <div>
            <img
                css={tw`mx-auto`}
                src={Logo}
                alt="logo"
                style={{ height: '40px' , width: '60px'}}
            />
        </div>
    </header>
);

export default Header;
