"use client";
import "../../globals.css";
import "../../CSSFormattingHeader.css";
import "./CSSFormattingMaterialSearching.css";
import "../CSSFormattingSearchPages.css";
import "../../BaseScript.js";

import React, {useEffect, useState} from "react";
import { SignInDirect } from "@/components/signin-redirect";
import { Entry } from "./entry.jsx"
import MaterialForm from "./MaterialSearchScript.jsx"

export default function Material({data}) {
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
                <div className="PageTitle"><h1><b>Find a Material!</b></h1></div>
            <div className="search-container">
                <input type="text" placeholder="Search..." className="fa fa-search"/>
            </div>
            <div className="Search">
                <MaterialForm></MaterialForm>
        </div>
    </div>
    <div id = "Entries">
          {Array.isArray(data) ? (data.map((entry: any,index: any) => (
            <div key = {index}>
            <Entry
              entryTitle = {entry.MaterialName}
              image={entry.MaterialImage}
              type={entry.MaterialType}
              brand={entry.MaterialBrand}
              color={entry.MaterialColor}
              usedIn={entry.UsedIn}
              />
              </div>
          ))) : (
  <p>No Materials found</p>
)}
        
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