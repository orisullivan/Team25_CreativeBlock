import "../../globals.css";
import "./CSSFormattingMaterialSearching.css";
import Link from 'next/link';

import { SignInDirect } from "@/components/signin-redirect";
import { redirect } from "next/navigation";
import { checkIsAuthenticated } from "@/src/lib/auth/checkIsAuthenticated";
import readExcelData from "./excelToJson.js"
import Material from "./material";

const MaterialPage: React.FC = async () => {
    const isAuthenticated = await checkIsAuthenticated();
    const data = await readExcelData("./src/app/search/materials/MaterialDatabase.xlsx");
    if (isAuthenticated) {
        redirect("/login");
    } else {
        return <Material data = {data} />
    }
}


export default MaterialPage;
