"use client";
import "../../globals.css";
import "./CSSFormattingGuidelines.css";
import "../../CSSFormattingHeader.css";
import "../../BaseScript.js";
import "../../TipJarFormatting.css"

import { useState } from "react";
import { SignInDirect } from "@/components/signin-redirect";

export default function GuideslinesPage( ){
    const [isVisible, setIsVisible] = useState(false);
        const toggleDiv = () => {
        setIsVisible((prev) => !prev);
        };
    

return <div className="">
    <header>
        {isVisible && (<div id = "TipJarDiv">
            <div id = "TipJar">
            <img src = "/TipJarBlank.PNG" id = "PopUpImg"/>
            <button type = "button" id = "Close" onClick = {toggleDiv}> Close Tip Jar</button>
            <div className = "text">
                <h2 id = "Title"> Tip Jar</h2>
                <form className = "TipInfo">
                    <label htmlFor ="UsernameInput"> Your Username:</label>
                    <input type = "text" id = "UsernameInput"/>
                    <label htmlFor = "TippedUser">Recipient Username:</label>
                    <input type = "text" id = "TippedUser"/>
                    <label htmlFor = "TipAmount"> Tip Amount (in dollars):</label>
                    <input type= "number" id = "TipAmount"/>
                    <label htmlFor = "PayOption"> Payment Option:</label>
                    <label htmlFor="paypal"> <input type="radio" id="paypal" value="paypal"/>PayPal</label>
                    <label htmlFor= "venmo"><input type="radio" id="venmo" value="venmo"/> Venmo</label>
                    <label htmlFor = "Message"> Message for Recipient:</label>
                    <input type="text" id = "Message"/>
                    <label htmlFor ="Confirm"> Confirm Information: <input type="checkbox" id = "Confirm"/></label>
                    <br></br>
                    <input type = "submit" value = "Send Tip!" id = "submit"/>
                </form>
            </div>
        </div>
        </div>)}
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
                <div className = "guidelinesPage">
                <div className = "GuidelinesTitle"> <h1>Community Guidelines</h1></div><br></br>
                <div className = "guidelineContent">
                <div id = "ProhibitedActions">
                <h2> Prohibited Actions</h2>
                <p> 1. No harassment or bullying of other users, or any sort of discriminatory behavior.</p>
                <p> 2. No plagiarism, so no stealing the patterns or work of other users and trying to pass it off as your own.</p>
                <p> 3. No generative AI usage in the creation of patterns or other listed products.</p>
                <p> 4. No explicit sexual content within pattern listsing or forum entries.</p>
                <p> 5. No inappropiate usernames or profile information visible to other users.</p>
                <p> 6. Do not share sensitive personal information with other users, like account information, full name, address, or other identifying info.</p>
            </div>
            <div id = "RecommendedActions">
                <h2> Recommended Actions</h2>
                <p> 1. Recommended minimum user age is 15, and it is recommended to use The Creative Block with the same discretion as any other social media platform.</p>
                <p> 2. All patterns and listed products are free to use and access, but it is recommended to tip users through the Tip Jar feature when using their work.  </p>
                <p> 3. Have a question about any craft? Post a question to the forum and see how other crafters can help you!</p>
                <p> 4. If you see anyone engaging in any of the prohibited actions, please utilize our report page to submit a ticket and help keep The Creative Block safe! </p>
                <p> 5. If you would like to post your own patterns, forum entries, or keep track of your materials and favorite patterns, make an account to get the full Creative Block experience!</p>
            </div>
            </div>
            </div>
        </ul>
        <div className = "AdSpace">
            <h2 id = "AdTitle"> Advertisements </h2>
            <img src = "/ad1.png" id = "ad1"/>
            <img src = "/ad2.png" id = "ad2"/>
            <img src = "/ad3.png" id = "ad3"/>
            <img src = "/ad4.png" id = "ad4"/>
            <img src = "/ad5.png" id = "ad5"/>
        <div className = "reportGuidelines">
            <li> <a href = "/search/report" id = "GoToReport" className = "PageLink">Report Page</a></li>
            <li> <a href = "/search/guidelines" id = "GoToGuidelines" className = "PageLink">Guidelines</a></li>
            <button type = "button" id = "TipJarButton" onClick = {toggleDiv}><img src = "/TipJar.PNG" id = "TipJarButtonImg"/></button>
        </div>
        </div>
        </div>
    </div>
    </div>
}