
import "../../globals.css";
import "./CSSFormattingForum.css";
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
            <li> <a href = "./forum" id = "GoToForum">Forum</a></li>
            <li><a href = "./patterns" id = "GoToPatternSearch">Pattern Search</a></li>
            <li> <a href = "./materials" id = "GoToMaterialSearch">Material Search</a></li>
        </ul>
        <li> <a href = "#">
            <div id = "ProfileBox">
                <img src = "guest pfp.webp" id = "pfp"/>
                <p id = "Username"> Guest</p>
            </div>
        </a></li>
    </ul>
    </header>
    <body>
        <div id = "Page">
        <ul className = "PageLayout">
            <div id = "TitleSearchFilters">
                <h1 id = "PageTitle"> Forum </h1>
                <h2> Search the forum!</h2>
                <form>
                    <input type="text" id = "SearchBar"/>
                </form>
                <h2> Filter/Sort By: </h2>
            </div>
            <div id = "Entries">
                <h1> Entries </h1>
            </div>
        </ul>
        <div id = "AdSpace">
            <h2 id = "AdTitle"> Advertisements </h2>
        </div>
        </div>
    </body>
    </div>
  )}