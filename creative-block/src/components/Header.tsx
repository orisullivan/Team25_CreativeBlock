// src/components/Header.tsx
import "../app/globals.css"
const Header = () => {
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
            </div>
        </a></li>
    </ul>
    </header>
  );
};

export default Header;