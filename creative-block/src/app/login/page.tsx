
import "../globals.css";
import "./login_form_css.css";
import Link from 'next/link';
import {redirect} from "next/navigation";
import { LoginForm } from "@/src/app/login/loginform"

const Login: React.FC = async () => {
    const isAuthenticated = false;

    if (isAuthenticated) {
        redirect("/search/forum");
    }
    else
    {return <LoginForm/>; }
}

export default Login;