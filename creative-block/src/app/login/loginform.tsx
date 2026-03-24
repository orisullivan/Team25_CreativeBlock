"use client";

import "../globals.css";
import "./login_form_css.css";
import Link from 'next/link';
import {useState} from 'react';
import { handleGoogleLogin } from "@/src/lib/auth/signinAction";
import { handleEmailLogin } from "@/src/lib/auth/signinAction"


export const LoginForm: React.FC = () => {
    const [formData, setFormData] = useState({email: "" as string });
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        //try {
        //    await handleEmailLogin(formData.email);
        //} catch error
    };
    return (
    <div className="">
        <header>
            <meta charSet="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Returning User</title>
    </header>

<div>
    <div className="wrapper">
        <form onSubmit={handleSubmit}>
            <h1>Welcome to the Creative Block!</h1>
            <div className="input-box">
                <input type="text" placeholder="   Username" required
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setFormData({email: event.target.value});
                }}/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="   Password" required/>
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
                <a href="#">Forgot password?</a>
            </div>

            <button className="btn" onClick={() => handleGoogleLogin()}> Login</button>

            <div className="register-link">
                <p>Don't have an account? <a href="./login/newuser">Register</a></p>
            </div>
        </form>
    </div>
</div>
    </div>
  )}