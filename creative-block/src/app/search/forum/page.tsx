
import { SignInDirect } from "@/components/signin-redirect";
import ForumPage from "./forum";
import { redirect } from "next/navigation";
import "../../globals.css";
import "./CSSFormattingForum.css";
import Link from 'next/link';
import { checkIsAuthenticated } from "@/src/lib/auth/checkIsAuthenticated";
import readExcelData from "../forum/excelToJson";

const Forum: React.FC = async () => {
    const isAuthenticated = await checkIsAuthenticated();
    const data = await readExcelData("./src/app/search/forum/ForumDatabase.xlsx");
    if (isAuthenticated) {
        redirect("/login");
    } else {
        return <ForumPage data = {data}/>
    }
}

export default Forum;