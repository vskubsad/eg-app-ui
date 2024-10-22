import React from 'react';
import './signin.scss'
import { FaUser, FaLock } from "react-icons/fa";

const SignIn = () => {
    return (
        <div className='wrapper'>
            <div className='form-box signin'>
                <form action="">
                    <h1>SignIn</h1>
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
                    <div className='register-link'>
                        <p>Dont have an account? <a href='#'>Register</a></p>
                    </div>
                </form>
            </div>
        </div>    )
}

export default SignIn;