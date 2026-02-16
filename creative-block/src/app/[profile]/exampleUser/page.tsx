import "../../globals.css";
import "./CSSformatting.css"
import Image from "next/image";
export default function Home() {
  return (
        <ul>
            <ul className = "SidebarWrapper">
                <div id = "SidebarMain"> 
                    <h1> User Details </h1>
                    <h1> Preference Settings </h1>
                    <h1 > Material List </h1>
                    <h1 > My Posts </h1>
                    <h1> Tip Jar </h1>
                </div>
                <div id = "SidebarHelpText">
                    <h1> Help </h1>
                    <h1> Report </h1>
                </div>
            </ul>
            <ul className = "SideBarWrapper">
                <div className="MainBodyRegion">
            <a href="#section1" className="btn">Section 1</a>
            <a href="#section2" className="btn">Section 2</a>
            <a href="#section3" className="btn">Section 3</a>
            <a href="#section4" className="btn">Section 4</a>
            </div>
        </ul>
    </ul>
  );
}
