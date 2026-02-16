import "../../globals.css";
import Header from '../../../components/Header';
import "./CSSformatting.css"
import Image from "next/image";
export default function Home() {
  return (
       <ul className = "Forum">
            <div id = "Filters">
                <h3>User Name</h3>
                <h4>Profile Picture</h4>
            </div>
            <div id = "Entries">
            </div>
        </ul>
  );
}
