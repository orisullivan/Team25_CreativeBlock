"use client"

import { useRouter } from "next/navigation";

export const SignInButton = (props: { children?: React.ReactNode;
             className?: string;  
}) => { const router = useRouter();

    return (
        <button
            className={props.className}
            onClick={()=>{router.push("/login")}}
            >
                {props.children || "Sign In"} 
            </button>
    )
}