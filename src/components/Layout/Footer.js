import React from "react";
import tw from "tailwind.macro";
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import Logo from "../../assets/images/HonLogo.png";
import { isLoggedIn, logOut } from '../Auth/Auth';

const Footer = () => (
    <footer
        className="container"
        css={tw`flex mx-auto py-16 px-3 mt-16 mb-8 text-gray-800`}
    >
        <div 
            className="container"
            css={tw`flex w-9/12 text-center m-auto`}>
            <div css={tw`float-left flex-1 w-4/12 ml-4`}>
                <img
                    css={tw`mx-auto mt-4 mr-16`}
                    src={Logo}
                    alt="logo"
                    style={{ height: "45px", width: "45px" }}
                />
                <div css={tw`text-xs sm:text-sm`}>&copy; Hon Media 2020</div>
                
                <div css={tw`block`}>
                    {
                        isLoggedIn() ? 
                        <Link
                            to='/login'
                            css={tw`text-xs px-2 lg:px-4 no-underline text-black hover:text-blue-500 hover:text-opacity-75 mr-12`}
                            onClick={logOut}
                        >
                            Logout
                        </Link>
                        :
                        <Link
                            to='/login'
                            css={tw`text-xs px-2 lg:px-4 no-underline text-black hover:text-blue-500 hover:text-opacity-75 mr-12`}
                        >
                            Dev Login
                        </Link>
                    }
                </div>
            </div>

            <div css={tw`float-left flex-1 w-4/12`}>
                <h2 css={tw`text-xl font-semibold`}>Contact Us</h2>
                <a
                    href="https://hon-media.com/#contact"
                    target='_blank'
                    css={tw`text-sm px-2 lg:px-4 text-black hover:text-blue-500 hover:text-opacity-75`}
                    rel="noreferrer noopener"
                >
                    Send us a message
                </a>
                <div css={tw`text-sm mt-2`}>San Diego, CA</div>
            </div>

            <div css={tw`float-left flex-1 w-4/12`}>
                <h2 css={tw`text-xl font-semibold`}>Follow</h2>
                    <a 
                        href="https://www.instagram.com/honmediasd/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        css={tw`p-2 text-black rounded-full text-md`}
                        ><FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/65747941/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        css={tw`p-2 text-black rounded-full text-md`}
                        ><FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a
                        href="https://www.facebook.com/HonMediaSD/"
                        className="text-button hover:text-buttonHover"
                        target="_blank"
                        rel="noopener noreferrer"
                        css={tw`p-2 text-black rounded-full text-md`}
                        ><FontAwesomeIcon icon={faFacebookF} />
                    </a>
            </div>
        </div>
    </footer>
);

export default Footer;
