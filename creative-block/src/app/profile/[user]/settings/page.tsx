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

function handleClick() {
    console.log("increment like count")
  }

export default function Home(userData) {
  return (
    <ul>
       <ul className = "SidebarWrapper">
            <div id = "SidebarMain">  
                <h1> <Link href={`../${userData.id}/`}>User Details</Link> </h1>
                <h1> <Link href={`../${userData.id}/settings`}> Preference Settings</Link> </h1>
                <h1> <Link href={`../${userData.id}/materials`}> Material List </Link> </h1>
                <h1> <Link href={`../${userData.id}/posts`}> My Posts </Link> </h1>
                <h1> <Link href={`../${userData.id}/tipjar`}> Tip Jar</Link> </h1>
            </div>
            <div id = "SidebarHelpText">
                <h1> Help </h1>
                <h1> Report </h1>
            </div>
        </ul>
        <div className="MainBodyRegion">
        <h1>User Settings</h1>
        <h1>Post preferences</h1>   
        <h3>Allow comments: </h3> 
        </div>
<div id="status-text">OFF</div>
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
