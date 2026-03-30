import "../../globals.css";
import "./CSSFormattingPatternSearching.css";
export default function Pattern() {
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

    <div className = "body">
        <div id = "Page">
        <ul className = "PageLayout">
            <div className = "TitleAndSearch">
            <div className="wrapper">
        <div className="wrapper3"><h1><b>Find a Pattern!</b></h1></div>
        <div className="search-container">
        <input type="text" placeholder="Search..."/>
        <i className="fa fa-search"></i>
        </div>

        <div className="wrapper2">
            <form action="">
            <h2>Narrow Your Search Here!</h2>
            <div className="input-box">
                <label><b>Difficulty:</b></label><br></br>
                <input type="checkbox" id="difficulty1" name="difficulty1" value="Beginner"/>
                <label htmlFor="difficulty1">Beginner</label><br></br>
                <input type="checkbox" id="difficulty2" name="difficulty2" value="Intermediate"/>
                <label htmlFor="difficulty2">Intermediate</label><br></br>
                <input type="checkbox" id="difficulty3" name="difficulty3" value="Advanced"/>
                <label htmlFor="difficulty3">Advanced</label><br></br>
            </div>
            <div className="input-box">
                <label><b>Type of Craft:</b></label><br></br>
                <input type="checkbox" id="craft1" name="craft1" value="Crochet"/>
                <label htmlFor="craft1">Crochet</label><br></br>
                <input type="checkbox" id="craft2" name="craft2" value="Knitting"/>
                <label htmlFor="craft2">Knitting</label><br></br>
                <input type="checkbox" id="craft3" name="craft3" value="Cross Stitch"/>
                <label htmlFor="craft3">Cross Stitch</label><br></br>
                <input type="checkbox" id="craft4" name="craft4" value="Other Craft"/>
                <label htmlFor="craft4">Other</label><br></br>
            </div>
            <div className="input-box">
                <label><b>Type of Pattern:</b></label><br></br>
                <input type="checkbox" id="pattern1" name="pattern1" value="Clothing"/>
                <label htmlFor="pattern1">Clothing</label><br></br>
                <input type="checkbox" id="pattern2" name="pattern2" value="Homeware"/>
                <label htmlFor="pattern2">Homeware</label><br></br>
                <input type="checkbox" id="pattern3" name="pattern3" value="Toys"/>
                <label htmlFor="pattern3">Toys</label><br></br>
                <input type="checkbox" id="pattern4" name="pattern4" value="Other Pattern"/>
                <label htmlFor="pattern4">Other</label><br></br><br></br>
            </div>
            <button type="submit" className="btn">Submit</button>
        </form>
        </div>
    </div>
            </div>
        </ul>
        <div id = "AdSpace">
            <h2 id = "AdTitle"> Advertisements </h2>
            <img src = "/ad1.png" id = "ad1"/>
            <img src = "/ad2.png" id = "ad2"/>
            <img src = "/ad3.png" id = "ad3"/>
            <img src = "/ad4.png" id = "ad4"/>
            <img src = "/ad5.png" id = "ad5"/>
        </div>
        </div>
    </div>
    
    </div>
)}
