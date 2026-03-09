// src/
// components/Header.tsx
"use client"
import { useSession, signIn, signOut } from 'next-auth/react'
import { SessionProvider } from "next-auth/react";
import "../app/globals.css"



const Header = () => {
    const handleSignin = (e) => {
         e.preventDefault()
         signIn()
    }    
    const handleSignout = (e) => {
         e.preventDefault()
         signOut()
    }

    
    const { data: session } = useSession();
  return (
    
    <header>
        <ul className = "topnav">
        <img src = "/logo.png" id = "Logo"/>
        <div id = "TitleAndSloganBox">
            <h1 id = "Title"> The Creative Block </h1>
            <h2 id = "Slogan"> Placeholder for a Slogan</h2>
        </div>
        <ul className = "PageLinks">
            <li> <a href = "/search/forum" id = "GoToForum">Forum</a></li>
            <li><a href = "/search/patterns" id = "GoToPatternSearch">Pattern Search</a></li>
            <li> <a href = "/search/materials" id = "GoToMaterialSearch">Material Search</a></li>
        </ul>
        <li> <a href = "#">
            <div id = "ProfileBox">
                <img src = "guest pfp.webp" id = "pfp"/>
                <p id = "Username"> Guest</p>
               {session && <a href="#" onClick={handleSignout} className="btn-signin">Sign out</a>  } 
                {!session && <a href="#" onClick={handleSignin}  className="btn-signin">Sign in</a>  } 
            </div>
        </a></li>
    </ul>
    </header>
  );
};

export default Header;