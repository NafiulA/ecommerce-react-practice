import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import googleLogo from '../../images/googleLogo.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value);
    }
    const handleConfirmPasswordBlur = (e) => {
        setConfirmPassword(e.target.value);
    }
    const handleCreateUser = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Please confirm your password correctly!");
            return;
        }
        if (password.length < 6) {
            setError('Please provide a password of atleast 6 character');
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Please Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name='confirm-password' required />
                    </div>
                    <p style={{ color: 'red' }} > {error}</p>
                    <input className='form-submit' type="submit" value="Sign up" />
                </form>
                <p>
                    Already have an account?<Link className='form-link' to='/login'>Login</Link>
                </p>
                <div className='hr-container'>
                    <hr />
                    <p>or</p>
                    <hr />
                </div>
                <button className='googleBtn'>
                    <img src={googleLogo} alt="" />
                    <p>Continue with google</p>
                </button>
            </div>
        </div >
    );
};

export default Signup;