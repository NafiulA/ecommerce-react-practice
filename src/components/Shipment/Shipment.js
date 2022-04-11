import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [user] = useAuthState(auth);
    setEmail(user?.email);

    const handleNameBlur = (e) => {
        setName(e.target.value);
    }
    const handleAddressBlur = (e) => {
        setAddress(e.target.value);
    }
    const handlePhoneBlur = (e) => {
        setPhone(e.target.value);
    }
    const handleShippingInfo = (event) => {
        event.preventDefault();
        const shipping = (name, email, address, phone)
        console.log(shipping);
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping information</h2>
                <form onSubmit={handleShippingInfo}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="text" name='name' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readonly type="email" name='email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name='address' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhoneBlur} type="number" name='phone' />
                    </div>
                    <p style={{ color: 'red' }} > {error}</p>
                    <input className='form-submit' type="submit" value="Save and Proceed" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;