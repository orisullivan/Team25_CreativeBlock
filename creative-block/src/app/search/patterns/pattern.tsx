"use client";
import "../../globals.css";
import "./CSSFormattingPatternSearching.css";
import "../../CSSFormattingHeader.css";
import "../CSSFormattingSearchPages.css"
import "../../BaseScript.js";

import React, {useEffect, useState} from "react";
import { SignInDirect } from "@/components/signin-redirect";
import { Entry } from "./entry.jsx"

export default function Pattern({ data }) {
  return (
    <div>
    <header>
        <ul className = "topnav">
                    <div id = "header"></div>
                    <div className = "ProfileBox">
                        <SignInDirect className = "clickToLogin"/>
                        <p id = "YourUserName" className = "Username"> Guest</p>
                    </div>
                </ul>
    </header>

    <div className = "body">
        <div id = "Page">
        <ul className = "PageLayout">
            <div className = "TitleAndSearch">
        <div className="PageTitle"><h1><b>Find a Pattern!</b></h1></div>
        <div className="search-container">
        <input type="text" placeholder="Search..."/>
        <i className="fa fa-search"></i>
        </div>

        <div className="Search">
            <form action="">
            <h2>Narrow Your Search Here!</h2>
            <div className="input-box">
                <label><b>Difficulty:</b></label><br></br>
                <input type="checkbox" id="difficulty1" name="difficulty1" value="Beginner"/>
                <label htmlFor="difficulty1">Beginner</label><br></br>
                <input type="checkbox" id="difficulty2" name="difficulty2" value="Intermediate"/>
                <label htmlFor="difficulty2">Intermediate</label><br></br>
                <input type="checkbox" id="difficulty3" name="difficulty3" value="Advanced"/>
                <label htmlFor="difficulty3">Advanced</label><br></br>
            </div>
            <div className="input-box">
                <label><b>Type of Craft:</b></label><br></br>
                <input type="checkbox" id="craft1" name="craft1" value="Crochet"/>
                <label htmlFor="craft1">Crochet</label><br></br>
                <input type="checkbox" id="craft2" name="craft2" value="Knitting"/>
                <label htmlFor="craft2">Knitting</label><br></br>
                <input type="checkbox" id="craft3" name="craft3" value="Cross Stitch"/>
                <label htmlFor="craft3">Cross Stitch</label><br></br>
                <input type="checkbox" id="craft4" name="craft4" value="Other Craft"/>
                <label htmlFor="craft4">Other</label><br></br>
            </div>
            <div className="input-box">
                <label><b>Type of Pattern:</b></label><br></br>
                <input type="checkbox" id="pattern1" name="pattern1" value="Clothing"/>
                <label htmlFor="pattern1">Clothing</label><br></br>
                <input type="checkbox" id="pattern2" name="pattern2" value="Homeware"/>
                <label htmlFor="pattern2">Homeware</label><br></br>
                <input type="checkbox" id="pattern3" name="pattern3" value="Toys"/>
                <label htmlFor="pattern3">Toys</label><br></br>
                <input type="checkbox" id="pattern4" name="pattern4" value="Other Pattern"/>
                <label htmlFor="pattern4">Other</label><br></br><br></br>
            </div>
            <button type="submit" className="btn">Submit</button>
        </form>
        </div>
        </div>
        <div id = "Entries">
            {Array.isArray(data) ? (data.map((entry: any,index: any) => (
                        <div key = {index}>
                        <Entry
                          entryTitle = {entry.PatternName}
                          image={entry.PatternImage}
                          user={entry.User}
                          date ={((JSON.stringify(entry.Date)).toString().split("T")[0]).replace(/["]/gi, "")}
                          difficulty={entry.Difficulty}
                          craftType={entry.CraftType}
                          patternType={entry.PatternType}
                          />
                          </div>
                      ))) : (
              <p>No Pattern Entries Found.</p>)}
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
)}
