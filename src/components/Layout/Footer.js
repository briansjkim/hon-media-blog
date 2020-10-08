import React from "react";
import tw from "tailwind.macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Logo from "../../assets/images/HonLogo.png";

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
                css={tw`mx-auto mt-6 mr-16`}
                src={Logo}
                alt="logo"
                style={{ height: "25px", width: "45px" }}
                />
                <div css={tw`text-sm mt-4`}>&copy; Hon Media 2020</div>
            </div>

            <div css={tw`float-left flex-1 w-4/12`}>
                <h2 css={tw`text-2xl font-semibold`}>Contact</h2>
                <p className="mt-5">HonMediaSD@gmail.com</p>
                <p className="mt-5">San Diego, CA</p>
            </div>

            <div css={tw`float-left flex-1 w-4/12`}>
                <h2>Social Media</h2>
                    <a 
                        href="https://www.instagram.com/honmediasd/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        css={tw`text-black bg-gray-200 text-2xl`}
                        ><FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/65747941/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        css={tw`text-black bg-gray-200 text-2xl`}
                        ><FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                        href="https://www.facebook.com/HonMediaSD/"
                        className="text-button hover:text-buttonHover"
                        target="_blank"
                        rel="noopener noreferrer"
                        css={tw`text-black bg-gray-200 text-2xl`}
                        ><FontAwesomeIcon icon={faFacebook} />
                    </a>
            </div>
        </div>
    </footer>
  // <footer className="container mx-auto py-16 px-3 mt-16 mb-8 text-gray-800">
  //     <div className="flex -mx-3">
  //         <div className="flex-1 px-3">
  //             <h2 className="text-2xl font-semibold">Social Media</h2>
  //             <ul className="mt-4 leading-loose">
  //             <i className="fa fa-instagram" aria-hidden="true" />
  //             <li>
  //                 <a
  //                 href="https://www.instagram.com/honmediasd/"
  //                 className="text-button hover:text-buttonHover"
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //                 >
  //                 Instagram
  //                 </a>
  //             </li>
  //             <li>
  //                 <a
  //                 href="https://www.linkedin.com/company/65747941/admin/"
  //                 className="text-button hover:text-buttonHover"
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //                 >
  //                 Linkedin
  //                 </a>
  //             </li>
  //             <li>
  //                 <a
  //                 href="https://www.facebook.com/HonMediaSD/"
  //                 className="text-button hover:text-buttonHover"
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //                 >
  //                 Facebook
  //                 </a>
  //             </li>
  //             </ul>
  //         </div>
  //         <div className="flex-1 px-3">
  //             <h2 className="text-2xl font-semibold">Contact</h2>
  //             <p className="mt-5">HonMediaSD@gmail.com</p>
  //             <p className="mt-5">San Diego, CA</p>
  //         </div>
  //     </div>
  //     <div className="flex text-center mt-8">&copy; Hon Media 2020</div>
  // </footer>
);

export default Footer;
