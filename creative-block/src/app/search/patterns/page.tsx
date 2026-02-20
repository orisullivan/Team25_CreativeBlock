import "../../globals.css";
import "./CSSFormattingPatternSearching.css";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
    <header>
        <ul className = "topnav">
        <img src = "/logo.png" id = "Logo"/>
        <div id = "TitleAndSloganBox">
            <h1 id = "Title"> The Creative Block </h1>
            <h2 id = "Slogan"> Placeholder for a Slogan</h2>
        </div>
        <ul className = "PageLinks">
            <li> <a href = "#" id = "GoToForum">Forum</a></li>
            <li><a href = "#" id = "GoToPatternSearch">Pattern Search</a></li>
            <li> <a href = "#" id = "GoToMaterialSearch">Material Search</a></li>
        </ul>
        <li> <a href = "#">
            <div id = "ProfileBox">
                <img src = "guest pfp.webp" id = "pfp"/>
                <p id = "Username"> Guest</p>
            </div>
        </a></li>
    </ul>
    </header>
   <div>
        <div id = "Page">
        <ul className = "PageLayout">
        </ul>
        <div id = "AdSpace">
            <h2 id = "AdTitle"> Advertisements </h2>
        </div>
        </div>
    </div>
    </div>
)}
