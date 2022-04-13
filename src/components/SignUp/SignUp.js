import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css'
import auth from '../../firebase.init'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleConfirmPasseord = (event) => {
        setConfirmPassword(event.target.value)
    }

    if (user) {
        navigate('/')
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(password);
        console.log(confirmPassword);
        if (password !== confirmPassword) {
            setError("Didn't Match password")
            return;
        }
        setError('');

        createUserWithEmailAndPassword(email, password);
    }



    return (
        <div className='form-container'>
            <div className='form-body'>
                <div>
                    <h1 className='form-title'>Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmail} type="email" name="Email" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePassword} type="password" name="Password" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="password">Confirm Password</label>
                            <input onBlur={handleConfirmPasseord} type="password" name="Password" id="" required />
                            <p style={{ color: 'red' }}>{error}</p>
                        </div>
                        <input className='form-submit' type="submit" value="Sign Up" />
                    </form>
                    <p>Have an account? <Link class='login-link' to='/login'>Login</Link></p>
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

export default SignUp;