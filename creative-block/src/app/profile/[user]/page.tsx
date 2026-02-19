import "../../globals.css";
import "./CSSformatting.css"
import Image from "next/image";
import Link from 'next/link';
import { use } from 'react'
import { getUserDetails, getUserIDList } from '../../../lib/userInfo';

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


export default function Home( userData ){
  return (
    <div>
            <ul className = "SidebarWrapper">
                <div id = "SidebarMain"> 
                    <h1> User Details </h1>
                    <h1> <Link href={`${userData.id}/settings`}>Preference Settings</Link></h1>
                    <h1> <Link href={`${userData.id}/materials`}> Material List</Link></h1>
                    <h1> <Link href={`${userData.id}/posts`}> My Posts </Link></h1>
                    <h1> <Link href={`${userData.id}/tipjar`}> Tip Jar </Link></h1>
                </div>
                <div id = "SidebarHelpText">
                    <h1> Help </h1>
                    <h1> Report </h1>
                </div>
            </ul>
            <ul className = "SideBarWrapper">
                <div className="MainBodyRegion">
                    <h1>Username: exampleUser</h1>
                    <h1>Password: ***********</h1>
                    <h1>Profile Picture:</h1>
                <li> <a href = "#">
                <div>
                  <img src = "guest pfp.webp" id = "pfp"></img>
                     <p> change Profile Pic </p>
                </div>

                <div>
                    <p>___________________________________________________________________</p>
                    <h1>TIP JAR</h1>
                    <p>___________________________________________________________________</p>
                    <h1>Account Updates</h1>

                </div>

        </a></li>
            </div>
        </ul>
    </div>

  )
}
