"use server";

import { signIn } from "@/src/lib/auth/authConfig";  

export const handleGoogleLogin = async () => {
    try {
        await signIn("google", {redirectTo: "/search/forum"});
        console.log("MAde a log in console");
    } catch (error) {
        throw error;
    }
}

export const handleEmailLogin = async () => {
    try {
        console.log("Signed in with email");
        console.log("MAde a log in email");
    } catch (error) {
        throw error;
    }
}