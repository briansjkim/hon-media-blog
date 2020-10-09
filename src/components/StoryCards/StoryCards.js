import React from 'react';
import tw from 'tailwind.macro';

const Stories = () => {

    // handleClick() {

    // }

    return (
        <div 
            css={tw`mt-8 p-4 flex flex-col items-center shadow-xl w-2/5 rounded hover:shadow-2xl`}
        >
            <h2>Rice Goban (La Jolla) </h2>
            <i><q>Their quality of work and professionalism is of the best that I have worked with.</q></i>
            <img
                src="https://ricegobanusa.com/wp-content/uploads/2019/09/logo_homepage1.png"
                alt="ricegoban"
                css={tw`w-40 h-40 mr-4 mt-10 rounded-full`}
            ></img>
        </div>
    );
};

export default Stories;
