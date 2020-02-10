import React from "react";
import LoginForm from "./login-form/login-form";
import "./main-page.css";

function MainPage() {
    return (
        <div id="main-page">
            <div id="logo-container">
                <div id="logo-text">

                    <img
                        src={require("../../assets/images/d20.svg")}
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

export default MainPage;
