import React from 'react';
import tw from 'tailwind.macro';

import { Link } from 'gatsby';
import Logo from '../../assets/images/HonLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const SideDrawer = () => (
        <div
            css={tw`border-solid fixed h-full border-none flex flex-col text-center`}
            style={{ width: '10%', zIndex: '1' }}
        >
            <Link
                to='/'
                css={tw`py-2`}
            >
                <img
                    css={tw`mx-auto`}
                    src={Logo}
                    alt="logo"
                    style={{ height: '40px' , width: '60px'}}
                />
            </Link>
            <div
                css={tw`mt-20`}
            >
                FOLLOW
            </div>
            <a 
                href="https://www.instagram.com/honmediasd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                css={tw`mx-2 p-2 text-black rounded-full text-md`}
                ><FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
                href="https://www.linkedin.com/company/65747941/admin/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                css={tw`mx-2 p-2 text-black rounded-full text-md`}
                ><FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
                href="https://www.facebook.com/HonMediaSD/"
                className="text-button hover:text-buttonHover"
                target="_blank"
                rel="noopener noreferrer"
                css={tw`mx-2 p-2 text-black rounded-full text-md`}
                ><FontAwesomeIcon icon={faFacebookF} />
            </a>
        </div>
);

export default SideDrawer;
