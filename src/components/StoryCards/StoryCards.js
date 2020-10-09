import React from 'react';
import tw from 'tailwind.macro';

import Card from './Card';

const StoryCards = ({ customers }) => (
    <div css={tw`flex flex-col md:flex-row md:-mx-3 mt-12`}>
        {customers.map((customer, idx) =>
            <Card 
                key={idx}
                css={tw`w-1/2 mb-8 float-left`}
            >
                <h4 css={tw`text-xl`}>{customer.title}</h4>
                <i><q>{customer.content}</q></i>
                <div css={tw`text-center mt-8`}>
                    <img
                        css={tw`w-40 h-40 mt-10 rounded-full`}
                        src={customer.customerImage}
                        alt={customer.customerName}
                    />
                </div>
            </Card>
        )};
    </div>
);

export default StoryCards;
