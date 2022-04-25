import React from 'react';
import './Orders.css';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
    const [cart, setCart] = useCart();
    const navigate = useNavigate();

    const handleRemoveProduct = product => {
        const rest = cart.filter(item => item._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    }
    return (
        <div className='shop-container'>
            <div className='item-container'>
                {
                    cart.map(product => <ReviewItem key={product._id} product={product} handleRemoveProduct={handleRemoveProduct}></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={() => navigate("/shipment")}>Proceed to shipping</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;