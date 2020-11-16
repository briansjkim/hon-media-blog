import React from 'react';
import tw from 'tailwind.macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const SideDrawer = () => (
        <div
            css={tw`border-solid fixed h-full bg-white border-0 sm:flex sm:flex-col text-center`}
            style={{ width: '10%', zIndex: '1' }}
        >
            <div
                css={tw`sm:ml-2 sm:mt-40 sm:pt-40 sm:mb-4 sm:text-lg sm:font-bold`}
            >
                FOLLOW
            </div>
            <a 
                href="https://www.instagram.com/honmediasd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                css={tw`mx-2 mb-6 p-2 text-black rounded-full text-lg hover:text-buttonHover`}
                ><FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
                href="https://www.linkedin.com/company/65747941/admin/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                css={tw`mx-2 mb-6 p-2 text-black rounded-full text-lg hover:text-buttonHover`}
                ><FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
                href="https://www.facebook.com/HonMediaSD/"
                className="text-button hover:text-buttonHover"
                target="_blank"
                rel="noopener noreferrer"
                css={tw`mx-2 mb-6 p-2 text-black rounded-full text-lg hover:text-buttonHover`}
                ><FontAwesomeIcon icon={faFacebookF} />
            </a>
        </div>
);

export default SideDrawer;
