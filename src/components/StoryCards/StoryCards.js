import React from 'react';
import tw from 'tailwind.macro';

import Card from './Card';

const StoryCards = ({ customers }) => (
    <div css={tw`w-full text-center flex flex-col flex-wrap justify-center md:flex-row md:-mx-3 mt-12`}>
        {customers.map((customer, idx) =>
            <Card 
                key={idx}
                css={tw`mb-8 float-left`}
            >
                <h4 css={tw`text-3xl`}>{customer.title}</h4>
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
);

export default StoryCards;
