"use client";
import React, {useEffect, useState} from "react";
import { SignInDirect } from "@/components/signin-redirect";
import "../../globals.css";
import "./CSSFormattingForum.css";
import Link from 'next/link';
import Script from 'next/script.js';
import Template from "@/src/app/search/forum/template"
// import "./ForumScript"

export const ForumPage: React.FC = () => {

return <div className="">
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
        {/* <li> <a href = "#"> */}
        <div id = "ProfileBox">
                <SignInDirect className="pfp"/>
                <p id = "Username"> Guest</p>
            </div>
        {/* </a></li> */}
    </ul>
    </header>
    <div id="body">

        <div id = "Page">
        <ul className = "PageLayout">
            <div id = "TitleSearchFilters">
                <h1 id = "PageTitle"> Forum </h1>
                <h2> Search the forum!</h2>
                <form>
                    <input type="text" id = "SearchBar"/>
                </form>
                <button> Search! </button>
                <h2> Filter/Sort By: </h2>
                <p> Date Added: </p>
                <p> Tags: </p>
                <button> Search!</button>
            </div>
            <div id = "Entries">
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
        <Template>
            <div id = "Entry">
            <div className = "ForumEntry">
                        <div className = "InfoWTitle">
                            <h2 className = ".EntryTitle"></h2>
                                <div className = "Info">
                                  <div> <p>By:</p>  <p className = "Author"> </p> </div>
                                  <div><p>Added On:</p><p className = "Date"></p> </div>
                                  <div><p>Tags:</p><p className = "Tags"></p></div>
                                  <div><p>Comments:</p><p className = "Comments"></p></div>
                                </div>    
                        </div>
                        <div>
                                <div id = "Content">
                                    <p> Description: </p><p className = "Description"></p>
                                </div>
                                <div id = "Links">  
                                    <p> Mentioned Links:</p> 
                                    {/*<li><a href = <p className = "Links" ></p></a></li>  */}
                                 </div>
                          </div>      
            </div>
            </div>
        </Template>
        {/* <div> <Script src="./forum/ForumScript.js" defer></Script> */}
        {/* </div>  */}
    </div>
    </div>
}