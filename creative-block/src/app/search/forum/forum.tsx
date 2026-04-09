"use client";
import "../../globals.css";
import "../CSSFormattingSearchPages.css";
import "./CSSFormattingForum.css";
import "../../CSSFormattingHeader.css";
import "../../BaseScript.js";
import { SignInDirect } from "@/components/signin-redirect";
import { Entry } from "./entry.jsx"

export default function ForumPage( {data} ){

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
            <div id = "Entries">
                {Array.isArray(data) ? (data.map((entry: any,index: any) => (
                            <div key = {index}>
                            <Entry
                              entryTitle = {entry.entryTitle}
                              user={entry.User}
                              date ={((JSON.stringify(entry.Date)).toString().split("T")[0]).replace(/["]/gi, "")}
                              tags={entry.Tags}
                              comments={entry.Comments}
                              description={entry.Description}
                              links={entry.MentionedLinks}
                              />
                              </div>
                          ))) : (
                  <p>No Forum Entries found</p>)}
            </div>
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
    </div>
    </div>
}