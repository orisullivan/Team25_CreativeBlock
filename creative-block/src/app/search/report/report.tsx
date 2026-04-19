"use client";
import "../../globals.css";
import "./CSSFormattingReport.css";
import "../../CSSFormattingHeader.css";
import "../../BaseScript.js";
import "../../TipJarFormatting.css"

import { useState } from "react";
import { SignInDirect } from "@/components/signin-redirect";

export default function ReportPage( ){
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
                <div className = "PageTitle"><h2> Submit a Report Ticket - * Indicates A Required Field</h2> </div>
            <div className = "ReportTicket" >
                <form id = "Contents" action = "#">
                    <label htmlFor = "date"> *Date: </label>
                    <input type="date" id = "date"/>
                    <br></br><label htmlFor = "YourUser"> *Your Username: </label>
                    <input type="text" id = "YourUser"/>
                    <br></br><label htmlFor = "TheirUser"> *Who Do You Want To Report?</label>
                    <input type ="text" id = "TheirUser"/>
                    <br></br><label htmlFor="Issue"> *Select Why You Are Reporting:</label>
                    <select id="Issue">
                        <option value = "AI"> Suspected AI Usage</option>
                        <option value = "Plagiarism"> Suspected Plagiarism</option>
                        <option value = "BadProfile"> Innapropiate User Information (Username, Profile Picture, etc.)</option>
                        <option value = "BadUpload">Innapropiate User Upload (Forum Entry, Craft Pattern, etc.)</option>
                        <option value = "TextAbuse"> Abusive Written Messages</option>
                        <option value = "Other"> Other </option>
                    </select>
                    <br></br><label htmlFor="Description">If you selected other, or wish to provide more 
                        details of why you are reporting, please describe the incident here: </label>
                    <input type="text" id = "Description"/>
                    <br></br><input type="submit" id ="submitButton" value = "Submit Ticket"/>
                </form>
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
            <li> <a href = "/search/report" id = "GoToReport" 
            className = "PageLink">Report Page</a></li>
            <li> <a href = "/search/guidelines" id = "GoToGuidelines" 
            className = "PageLink">Guidelines</a></li>
            <button type = "button" id = "TipJarButton" onClick = {toggleDiv}>
                <img src = "/TipJar.PNG" id = "TipJarButtonImg"/></button>
        </div>
        </div>
        </div>
    </div>
    </div>
}