import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const ReviewItem = ({ product, handleRemoveProduct }) => {

    const { name, price, shipping, quantity, img } = product;

    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='details-container'>
                <div className='details'>
                    <p className="product-name" title={name}>{name.length > 20 ? name.slice(0, 20) + "..." : name}</p>
                    <p>Price: $<span className='orange-color'>{price}</span></p>
                    <p>Shipping: ${shipping}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className='delete-container'>
                    <button onClick={() => handleRemoveProduct(product)} className='delete-btn'>
                        <FontAwesomeIcon className='deleteIcon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;