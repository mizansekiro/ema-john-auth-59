import React from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import auth from '../../firebase.init'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleLoginemail = (event) => {
        setEmail(event.target.value);
    }
    const handleLoginPassword = (event) => {
        setPassword(event.target.value);
    }

    const loginUser = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate(from, { replace: true })
    }


    return (
        <div className='form-container'>
            <div className='form-body'>
                <div>
                    <h1 className='form-title'>Login</h1>
                    <form onSubmit={loginUser}>
                        <p style={{ color: 'red' }}>{error?.message}</p>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleLoginemail} type="email" name="Email" id="1" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input onBlur={handleLoginPassword} type="password" name="Password" id="" required />
                        </div>
                        {
                            loading && <p>Looding.....</p>
                        }
                        <input className='form-submit' type="submit" value="Login" />
                    </form>
                    <p>New to Ema-john? <Link className='login-link' to='/signup'>Create New Account</Link></p>
                    <div className='option'>
                        <div className='line'></div>
                        <p className='line-text'>or</p>
                        <div className='line'></div>
                    </div>

                    <button className='google-login'>
                        <img className='google-logo' src="google-logo.png" alt="" />
                        <p>Continue with Google</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;