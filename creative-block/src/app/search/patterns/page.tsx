import "../../globals.css";
import "./CSSFormattingPatternSearching.css";
import Link from 'next/link';

import { SignInDirect } from "@/components/signin-redirect";
import { redirect } from "next/navigation";
import { checkIsAuthenticated } from "@/src/lib/auth/checkIsAuthenticated";
import Pattern from "./pattern";

const PatternPage: React.FC = async () => {
    const isAuthenticated = await checkIsAuthenticated();
    if (isAuthenticated) {
        redirect("/login");
    } else {
        return <Pattern/>
    }
}

export default PatternPage;

