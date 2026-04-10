
import { SignInDirect } from "@/components/signin-redirect";
import GuidelinesPage from "./guidelines";
import { redirect } from "next/navigation";
import "../../globals.css";
import "./CSSFormattingGuidelines.css";
import Link from 'next/link';
import { checkIsAuthenticated } from "@/src/lib/auth/checkIsAuthenticated";


const Guidelines: React.FC = async () => {
    const isAuthenticated = await checkIsAuthenticated();
    if (isAuthenticated) {
        redirect("/login");
    } else {
        return <GuidelinesPage/>
    }
}

export default Guidelines;