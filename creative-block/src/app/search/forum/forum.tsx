"use client";
import "../../globals.css";
import "../CSSFormattingSearchPages.css";
import "./CSSFormattingForum.css";
import "../../CSSFormattingHeader.css";
import "../../BaseScript.js";
import React, {useEffect, useState} from "react";
import { SignInDirect } from "@/components/signin-redirect";
import Template from "@/src/app/search/forum/template"

export const ForumPage: React.FC = () => {

return <div className="">
    <header>
        <ul className = "topnav">
            <div id = "header"></div>
            <div className = "ProfileBox">
                <SignInDirect className = "clickToLogin"/>
                <p id = "YourUserName" className = "Username"> Guest</p>
            </div>
        </ul>
    </header>
    <div id="body">
        <div id = "Page">
            <ul className = "PageLayout">
                <div className = "TitleAndSearch">
                    <div className="PageTitle"><h1><b>Search The Forum!</b></h1></div>
                    <div className="search-container">
                        <input type="text" placeholder="Search..."/>
                        <i className="fa fa-search"></i>
                    </div>
                    <div className="Search">
                        <form action="">
                            <h2>Narrow Your Search Here!</h2>
                            <div className="input-box">
                                <label><b>Tags</b></label><br></br>
                                <input type="checkbox" id="tag1" name="tag1" value="Tag 1"/>
                                <label htmlFor="difficulty1">Tag 1</label><br></br>
                                <input type="checkbox" id="tag2" name="tag2" value="Tag 2"/>
                                <label htmlFor="difficulty2">Tag 2</label><br></br>
                                <input type="checkbox" id="tag3" name="tag3" value="Tag 3"/>
                                <label htmlFor="difficulty3">Tag 3</label><br></br>
                            </div>
                            <button type="submit" className="btn">Submit</button>
                        </form>
                    </div>
                </div>
            <div id = "Entries"></div>
        </ul>
        <div className = "AdSpace">
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