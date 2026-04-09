import "../../globals.css";
import "./CSSFormattingPatternSearching.css";
import Link from 'next/link';

import { SignInDirect } from "@/components/signin-redirect";
import { redirect } from "next/navigation";
import { checkIsAuthenticated } from "@/src/lib/auth/checkIsAuthenticated";
import readExcelData from "./excelToJson.js"
import Pattern from "./pattern";

const PatternPage: React.FC = async () => {
    const isAuthenticated = await checkIsAuthenticated();
    const data = await readExcelData("./src/app/search/patterns/PatternListingDatabase.xlsx");
    if (isAuthenticated) {
        redirect("/login");
    } else {
        return <Pattern data = {data}/>
    }
}

export default PatternPage;

