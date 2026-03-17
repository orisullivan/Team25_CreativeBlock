"use client";

import "../globals.css";
import "./login_form_css.css";
import Link from 'next/link';
import { handleGoogleLogin } from "@/src/lib/auth/signinAction";

export const LoginForm: React.FC = () => {
  return (
    <div className="">
        <header>
            <meta charSet="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Returning User</title>
    </header>

<body>
    <div className="wrapper">
        <form>
            <h1>Welcome to the Creative Block!</h1>
            <div className="input-box">
                <input type="text" placeholder="   Username" required/>
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
</body>
    </div>
  )}