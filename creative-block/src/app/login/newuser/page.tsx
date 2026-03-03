
import "../../globals.css";
import "../login_form_css.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
		<head>
			<meta charSet="UTF-8"/>
			<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			<title>New User</title>
		</head>

<body>
    <div className="wrapper">
        <form action="../search/forum">
            <h1>Create a New Account</h1>
            <div className="input-box">
                <input type="email" placeholder="   Email" required/>
            </div>
            <div className="input-box">
                <input type="text" placeholder="   Username" required/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="   Password" required/>
            </div>
            <div className="input-box">
                <input type="text" placeholder="   Confirm Password" required/>
            </div>

            <button type="submit" className="btn">Create Account</button>
            <div className="register-link">
                <p>Already have an account? <a href="../login">Login</a></p>
            </div>
        </form>
    </div>
</body>
    </div>
  )}