import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import logo_icon from '../Assets/logo-ai.png';

const LoginSignup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        const hardcodedUsername = 'user123';
        const hardcodedPassword = 'pass123';

        if (email === hardcodedUsername && password === hardcodedPassword) {
            navigate('/chatbot');
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <>
            <div className='main-header'>
                <img src={logo_icon} className='main_logo' alt='Logo' />
            </div>
            <div className='container'>
                <div className="header">
                    <div className="text">Login</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={email_icon} alt="Email icon" />
                        <input 
                            type="text" 
                            placeholder='Username' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="Password icon" />
                        <input 
                            type="password" 
                            placeholder='Password' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                </div>
                <div className="forgot-password">Lost password? <span>Click Here</span></div>
                <div className="submit-container">
                    {/* Submit button to handle login */}
                    <button className='submit' onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </>
    );
};

export default LoginSignup;
