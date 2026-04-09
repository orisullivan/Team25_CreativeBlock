"use client";

import { useRouter } from "next/navigation";

export const SignInDirect = (props: {children?: React.ReactNode; className?:string}) =>
{
    const router = useRouter();
    return <button className={props.className} onClick={() => {router.push("/login")}}>
        {props.children || <img src = "/guest pfp.webp" id = "loginPFP"/>}
        </button>
}