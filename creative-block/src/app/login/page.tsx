
import "../globals.css";
import "./login_form_css.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
        <head>
            <meta charSet="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Returning User</title>
    </head>

<body>
    <div className="wrapper">
        <form action="">
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

            <button type="submit" className="btn">Login</button>

            <div className="register-link">
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>
        </form>
    </div>
</body>
    </div>
  )}