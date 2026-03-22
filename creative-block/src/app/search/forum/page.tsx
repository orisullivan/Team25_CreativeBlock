
import { SignInDirect } from "@/components/signin-redirect";
import { ForumPage } from "./forum";
import { redirect } from "next/navigation";
import "../../globals.css";
import "./CSSFormattingForum.css";
import Link from 'next/link';
import { checkIsAuthenticated } from "@/src/lib/auth/checkIsAuthenticated";

const Forum: React.FC = async () => {
    const isAuthenticated = await checkIsAuthenticated();
    if (!isAuthenticated) {
        redirect("/login");
    } else {
        return <ForumPage/>
    }
}

export default Forum;