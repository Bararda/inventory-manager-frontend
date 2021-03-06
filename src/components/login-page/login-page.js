import React from 'react';
import LoginForm from './login-form/login-form';
import './login-page.css';

function LoginPage(props) {
    return (
        <div id="main-page">
            <div id="logo-container">
                <div id="logo-text">

                    <img
                        src={require('../../assets/images/red_wings.png')}
                        id="logo"
                        alt="d20"
                    />
                </div>
                <div id="login-form-container">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
