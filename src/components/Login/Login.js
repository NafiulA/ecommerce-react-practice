import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import googleLogo from '../../images/googleLogo.png';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [SignInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth);
    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value);
    }
    const handleLogin = (event) => {
        event.preventDefault();
        SignInWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Please Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to Ema-john? <Link className='form-link' to='/signup'>Create an account</Link>
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
        </div>
    );
};

export default Login;