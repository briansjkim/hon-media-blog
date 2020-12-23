import React from 'react';
import tw from 'tailwind.macro';

const Card = ({ children }) => (
    <div
        css={tw`w-1/2 h-auto mx-auto p-12 rounded-lg border border-solid border-gray-200 text-left mb-20`}
        style={{ boxShadow: '0 10px 28px rgba(0,0,0,.08)' }}
    >{children}</div>
);

export default Card;
