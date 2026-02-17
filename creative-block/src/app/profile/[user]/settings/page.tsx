import "../../../globals.css";
import "./CSSformatting.css"
import Image from "next/image";
import Link from 'next/link';
import { getUserDetails, getUserIDList } from '../../../../lib/userInfo';

interface UserProps {
  params: Promise<{ user: string }>;
}

export async function GetStaticPaths() {
  const paths = await getUserIDList();
  return {
    paths, fallback: false,
 };
}

export async function GetStaticProps({ params } ) {
  const userData = await getUserDetails(params);
  return {
    props: {
      userData,
    },
  };
}


export default function Home(userData) {
  return (
    <ul>
       <ul className = "SidebarWrapper">
            <div id = "SidebarMain">  
                <h1> <Link href={`../${userData.id}/`}>User Details</Link> </h1>
                <h1> Preference Settings </h1>
                <h1> Material List </h1>
                <h1> My Posts </h1>
                <h1> Tip Jar </h1>
            </div>
            <div id = "SidebarHelpText">
                <h1> Help </h1>
                <h1> Report </h1>
            </div>
        </ul>
        <div className="MainBodyRegion">
        <a href="#section1" className="btn">Section 1</a>
        <a href="#section2" className="btn">Section 2</a>
        <a href="#section3" className="btn">Section 3</a>
        <a href="#section4" className="btn">Section 4</a>
    </div>
    <div className="MainBodyRegion">
    <div className="section one" id="section1">
        Section 1: Welcome to the first section!
    </div>
    <div className="section two" id="section2">
        Section 2: Here’s some content for the second section.
    </div>
    <div className="section three" id="section3">
        Section 3: More details and information here.
    </div>
    <div className="section four" id="section4">
        Section 4: Final section with additional content.
    </div>
    </div>
    </ul>
  );
}
