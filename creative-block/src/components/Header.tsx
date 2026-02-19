// src/components/Header.tsx
import "../app/globals.css"
const Header = () => {
  return (
    
    <header>
        <ul className = "topnav">
        <img src = "/testLogo.png" id = "Logo"></img>
        <div className = "TitleAndSloganBox">
            <h1 id = "Title"> The Creative Block </h1>
            <h2 id = "Slogan"> Placeholder for a Slogan</h2>
        </div>
        <ul className = "PageLinks">
            <li> <a href = "#">Forum</a></li>
            <li><a href = "#">Pattern Search</a></li>
            <li> <a href = "#">Material Search</a></li>
        </ul>
        <li> <a href = "#">
            <div id = "ProfileBox">
                <img src = "guest pfp.webp" id = "pfp"></img>
                <p id = "Username"> Guest</p>
            </div>
        </a></li>
    </ul>
    </header>
  );
};

export default Header;