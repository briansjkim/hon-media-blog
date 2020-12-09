import React from 'react';

const componentDecorator = (href, text, key) => (
    <a href={href} key={key} target="_blank" rel="noreferrer">
        {text}
    </a>
);

export default componentDecorator;
