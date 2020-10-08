import React from "react";
import tw from "tailwind.macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import Logo from "../../assets/images/HonLogo.png";

const Footer = () => (
    <footer
        className="container"
        css={tw`flex mx-auto py-16 px-3 mt-16 mb-8 text-gray-800`}
    >
        <div css={tw`flex align-top`}>
            <div css={tw`float-left`}>
                <img
                css={tw`mx-auto my-3`}
                src={Logo}
                alt="logo"
                style={{ height: "25px", width: "45px" }}
                />
                <div css={tw`text-sm text-center mt-2`}>&copy; Hon Media 2020</div>
            </div>
            <div css={tw`float-left`}>
                <h2 css={tw`text-2xl font-semibold`}>Contact</h2>
            </div>
            <div css={tw`float-left`}>
                <h2>Social Media</h2>
                <FontAwesomeIcon icon={faCoffee} />
                {/* <i class="fab fa-instagram"><a
                    href="https://www.instagram.com/honmediasd/"
                    className="text-button hover:text-buttonHover"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                </a></i> */}
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
