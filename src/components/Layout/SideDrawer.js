import React from 'react';
import tw from 'tailwind.macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const SideDrawer = () => (
        <div
            css={tw`border-solid fixed h-full border-none mt-16 flex flex-col text-center`}
        >
            <div>FOLLOW</div>
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
