import React from 'react';
import tw from 'tailwind.macro';

const Card = ({ children }) => (
    <div
        css={tw`w-1/4 h-auto mx-24 p-12 rounded-lg border border-solid border-gray-200 text-left`}
        style={{ boxShadow: '0 10px 28px rgba(0,0,0,.08)' }}
    >{children}</div>
);

export default Card;
