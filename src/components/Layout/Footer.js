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
        css={tw`flex mx-auto py-16 mt-16 mb-8 text-gray-800`}
    >
        <div 
            className="container"
            css={tw`flex flex-row flex-wrap md:justify-around w-9/12 m-auto`}>
            <div css={tw`flex-none w-7/12 mb-12 md:w-3/12 md:mx-6`}>
                <img
                    css={tw`flex mt-4 mr-16`}
                    src={Logo}
                    alt="logo"
                    style={{ height: "45px", width: "45px" }}
                />
                <div css={tw`flex text-xs sm:text-sm`}>&copy; Hon Media 2020</div>
                
                <div css={tw`flex`}>
                    {
                        isLoggedIn() ? 
                        <Link
                            to='/login'
                            css={tw`text-xs no-underline text-black hover:text-blue-500 hover:text-opacity-75 mr-12`}
                            onClick={logOut}
                        >
                            Logout
                        </Link>
                        :
                        <Link
                            to='/login'
                            css={tw`text-xs no-underline text-black hover:text-blue-500 hover:text-opacity-75 mr-12`}
                        >
                            Dev Login
                        </Link>
                    }
                </div>
            </div>

            <div css={tw`flex-none flex-column w-7/12 mb-12 md:w-3/12 md:mx-6`}>
                <h2 css={tw`text-xl flex font-semibold`}>Contact Us</h2>
                <a
                    href="https://hon-media.com/#contact"
                    target='_blank'
                    css={tw`flex text-sm text-black hover:text-opacity-75 hover:text-buttonHover`}
                    rel="noreferrer noopener"
                >
                    Send us a message
                </a>
                <div css={tw`flex text-sm mt-2`}>San Diego, CA</div>
            </div>

            <div css={tw`flex-none w-7/12 md:w-2/12 md:mx-6`}>
                <h2 css={tw`flex text-xl font-semibold`}>Follow</h2>
                    <div css={tw`flex flex-row`}>
                        <a 
                            href="https://www.instagram.com/honmediasd/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            css={tw`flex p-2 text-black rounded-full text-lg hover:text-buttonHover mr-4`}
                            ><FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/65747941/admin/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            css={tw`flex p-2 text-black rounded-full text-lg hover:text-buttonHover mr-4`}
                            ><FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a
                            href="https://www.facebook.com/HonMediaSD/"
                            className="text-button hover:text-buttonHover"
                            target="_blank"
                            rel="noopener noreferrer"
                            css={tw`flex p-2 text-black rounded-full text-lg hover:text-buttonHover`}
                            ><FontAwesomeIcon icon={faFacebookF} />
                        </a>
                    </div>
            </div>
        </div>
    </footer>
);

export default Footer;
