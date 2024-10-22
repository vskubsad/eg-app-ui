/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './signin.scss'
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const SignIn = () => {
    const [action, setAction] = useState('');

    const signUp = () => {
        setAction(' active');
    }

    const signIn = () => {
        setAction('');
    }

    return (
        <div className={`wrapper${action}`}>
            <div className='form-box signin'>
                <form action="">
                    <h1>Sign In</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Username' required />
                        <FaUser className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon'/>
                    </div>
                    <div className='remember-forgot'>
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit">SignIn</button>

                    <div className='signup-link'>
                        <p>Dont have an account? <a href='#' onClick={signUp}>Sign Up</a></p>
                    </div>
                </form>
            </div>
            <div className='form-box signup'>
                <form action="">
                    <h1>Sign Up</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Username' required />
                        <FaUser className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input type="text" placeholder='Email' required />
                        <FaEnvelope className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon'/>
                    </div>
                    <div className='remember-forgot'>
                        <label><input type="checkbox" />I agree to the terms & conditions</label>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit">SignUp</button>

                    <div className='signup-link'>
                        <p>Already have an account? <a href='#' onClick={signIn}>Sign In</a></p>
                    </div>
                </form>
            </div>
        </div>    )
}

export default SignIn;