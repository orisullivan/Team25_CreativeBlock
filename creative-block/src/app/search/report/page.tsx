
import { SignInDirect } from "@/components/signin-redirect";
import ReportPage from "./report";
import { redirect } from "next/navigation";
import "../../globals.css";
import "./CSSFormattingReport.css";
import Link from 'next/link';
import { checkIsAuthenticated } from "@/src/lib/auth/checkIsAuthenticated";


const Report: React.FC = async () => {
    const isAuthenticated = await checkIsAuthenticated();
    if (isAuthenticated) {
        redirect("/login");
    } else {
        return <ReportPage/>
    }
}

export default Report;