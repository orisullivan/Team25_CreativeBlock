"use client";

import { useRouter } from "next/navigation";

export const SignInDirect = (props: {children?: React.ReactNode; className?:string}) =>
{
    const router = useRouter();
    return <button className={props.className} onClick={() => {router.push("/login")}}>
        {props.children || <img src = "/funy squirrel.webp" id = "loginPFP"/>}
        </button>
}