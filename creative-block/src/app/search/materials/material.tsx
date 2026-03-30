import "../../globals.css";
import "./CSSFormattingMaterialSearching.css";
import Link from 'next/link';

export default function Material() {
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
                <div className="wrapper3">
                    <h1><b>Find a Material!</b></h1>
                </div>
            <div className="search-container">
                <input type="text" placeholder="Search..."/>
                <i className="fa fa-search"></i>
            </div>
            <div className="wrapper2">
                <form action="">
                <h2>Narrow Your Search Here!</h2>
                <div className="input-box">
                    <label><b>Type of Material:</b></label><br></br>
                        <input type="checkbox" id="material1" name="material1" value="Yarn"/>
                        <label htmlFor="material1">Yarn</label><br></br>
                        <input type="checkbox" id="material2" name="material2" value="Thread"/>
                        <label htmlFor="material2">Thread</label><br></br>
                        <input type="checkbox" id="material3" name="material3" value="Fabric"/>
                        <label htmlFor="material3">Fabric</label><br></br>
                        <input type="checkbox" id="material4" name="material4" value="Other Material"/>
                        <label htmlFor="material4">Other</label><br></br>
                </div>
                <div className="input-box">
                    <label><b>Brand:</b></label><br></br>
                    <input type="checkbox" id="brand1" name="brand1" value="Lion Brand"/>
                    <label htmlFor="brand1">Lion Brand</label><br></br>
                    <input type="checkbox" id="brand2" name="brand2" value="Bernat"/>
                    <label htmlFor="brand2">Bernat</label><br></br>
                    <input type="checkbox" id="brand3" name="brand3" value="Red Heart"/>
                    <label htmlFor="brand3">Red Heart</label><br></br>
                    <input type="checkbox" id="brand4" name="brand4" value="Other Brand"/>
                    <label htmlFor="brand4">Other</label><br></br>
                </div>
                <div className="input-box">
                    <label><b>Color:</b></label><br></br>
                    <input type="checkbox" id="color1" name="color1" value="Red"/>
                    <label htmlFor="color1">Red</label><br></br>
                    <input type="checkbox" id="color2" name="color2" value="Orange"/>
                    <label htmlFor="color2">Orange</label><br></br>
                    <input type="checkbox" id="color3" name="color3" value="Yellow"/>
                    <label htmlFor="color3">Yellow</label><br></br>
                    <input type="checkbox" id="color4" name="color4" value="Green"/>
                    <label htmlFor="color4">Green</label><br></br>
                    <input type="checkbox" id="color5" name="color5" value="Blue"/>
                    <label htmlFor="color5">Blue</label><br></br>
                    <input type="checkbox" id="color6" name="color6" value="Purple"/>
                    <label htmlFor="color6">Purple</label><br></br>
                    <input type="checkbox" id="color7" name="color7" value="Black"/>
                    <label htmlFor="color7">Black</label><br></br>
                    <input type="checkbox" id="color8" name="color8" value="White"/>
                    <label htmlFor="color8">White</label><br></br>
                    <input type="checkbox" id="color9" name="color9" value="Other Color"/>
                    <label htmlFor="color9">Other</label><br></br><br></br>
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