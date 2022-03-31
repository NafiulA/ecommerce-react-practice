import React from 'react';

const ReviewItem = ({ product }) => {

    const { name, price, shipping, quantity } = product;

    return (
        <div>
            <h3>this r for review {name}</h3>
        </div>
    );
};

export default ReviewItem;