import React from 'react';
import { Link } from 'gatsby';
import tw from 'tailwind.macro';

import Card from './Card';

const StoryCards = ({ customers }) => {
    return (
        <div
            css={tw`w-full text-center flex flex-col flex-wrap justify-center md:flex-row mt-12`}
            style={{ marginLeft: '1%' }}
        >
            {customers.map((customer, idx) =>
                <Card 
                    key={idx}
                    css={tw`mb-8 float-left`}
                >
                    <h4 css={tw`text-3xl`}>
                        <Link
                            to="/"
                            css={tw`px-2 lg:px-4 no-underline text-black hover:text-blue-500 hover:text-opacity-75`}
                        >
                            {customer.title}
                        </Link>
                    </h4>
                    <i css={tw`text-xl`}><q>{customer.snippet}</q></i>
                    <div css={tw`text-center mt-8`}>
                        <img
                            css={tw`w-56 h-56 mt-10 rounded-full`}
                            src={customer.customerImage}
                            alt={customer.customerName}
                        />
                    </div>
                </Card>
            )}
        </div>
    )
};

export default StoryCards;
