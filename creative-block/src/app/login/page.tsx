
import "../globals.css";
import "./login_form_css.css";
import Link from 'next/link';
import {redirect} from "next/navigation";
import { LoginForm } from "@/src/app/login/loginform"
import { checkIsAuthenticated } from "@/src/lib/auth/checkIsAuthenticated";

const Login: React.FC = async () => {
    const isAuthenticated = await checkIsAuthenticated();

    if (isAuthenticated) {
        redirect("/search/forum");
    }
    else
    {return <LoginForm/>; }
}

export default Login;