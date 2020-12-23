import React from 'react';
import { Link } from 'gatsby';
import tw from 'tailwind.macro';

import Card from './Card';

const StoryCards = ({ customers }) => {
    return (
        <div
            css={tw`w-full text-center flex flex-col flex-wrap md:flex-row mt-12`}
            // style={{ marginLeft: '10%' }}
        >
            {customers.map((customer, idx) =>
                <Card 
                    key={idx}
                >
                    <h4 css={tw`text-left text-3xl`}>
                        <Link
                            to={customer.customerSite}
                            target='_blank'
                            css={tw`pr-2 lg:pr-4 no-underline text-black hover:text-buttonHover hover:text-opacity-75`}
                        >
                            {customer.title}
                        </Link>
                    </h4>
                    <i css={tw`text-xl whitespace-pre-wrap`}><q>{customer.content}</q></i>
                    <p css={tw`text-gray-600`}>{customer.customerName}, { customer.customerTitle} </p>
                    {customer.customerTitle2 ? <p css={tw`text-gray-600`}>{ customer.customerTitle2} </p> : null }
                    <div css={tw`text-center mt-8`}>
                        <img
                            css={tw`w-full max-w-xs h-auto mt-10`}
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
