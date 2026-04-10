"use client";
import "../../globals.css";
import "./CSSFormattingPatternSearching.css";
import "../../CSSFormattingHeader.css";
import "../CSSFormattingSearchPages.css"
import "../../BaseScript.js";

import React, { useEffect, useState, useMemo } from "react";
import { SignInDirect } from "@/components/signin-redirect";
import { Entry } from "./entry.jsx"

export default function Pattern({ data }) {
    const [database, setDatabase] = useState<any[]>([]); 
    const [formData, setFormData] = useState({
        textSearch: "",
        difficulty: "",
        craftType: "",
        patternType: "",
      });
      useEffect(() => {
          if (Array.isArray(data)) {
            setDatabase(data);
          }
        }, [data]);
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prev) => ({
            ...prev,
            [name]: value,
          }));
        };
        const filteredPatterns = useMemo(() => {
          if (!Array.isArray(database)) return [];
          const q = formData.textSearch.toLowerCase();
      
          return database.filter((entry) => {
            const title = (entry.PatternName ?? "").toLowerCase();
            const craftType = (entry.CraftType ?? "").toLowerCase();
            const patternType = (entry.PatternType ?? "").toLowerCase();
            const difficulty = (entry.Difficulty ?? "").toLowerCase();
      
            const matchesText = q === "" || title.includes(q);
            const matchesCraftType = formData.craftType ? craftType === formData.craftType.toLowerCase() : true;
            const matchesPatternType = formData.patternType ? patternType === formData.patternType.toLowerCase() : true;
            const matchesDifficulty = formData.difficulty ? difficulty === formData.difficulty.toLowerCase() : true;
      
            return matchesText && matchesCraftType && matchesPatternType && matchesDifficulty;
          });
        }, [database, formData]);
      
        const onSubmit = (e) => {
          e.preventDefault();
          console.log("Pattern Form Data:", formData);
        };
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
                <form action="">
        <div className="PageTitle"><h1><b>Find a Pattern!</b></h1></div>
        <div className="search-container">
        <input type="text" 
        placeholder="Search..." 
        className="fa fa-search"
        id = "textSearch" 
        name = "textSearch" 
        value = {formData.textSearch} 
        onChange={handleChange}/>
        </div>

        <div className="Search">
            <h2>Narrow Your Search Here!</h2>
            <div className="input-box">
                <label><b>Difficulty:</b></label>
                <select name="difficulty" id="difficulty" value={formData.difficulty} onChange={handleChange}>
                    <option value=""></option>
                    <option value="beginner"> Beginner </option>
                    <option value="intermediate"> Intermediate </option>
                    <option value="advanced"> Advanced</option>
                </select>
            </div>
            <div className="input-box">
                <label><b>Type of Craft:</b></label>
                <select name="craftType" id="craftType" value={formData.craftType} onChange={handleChange}>
                    <option value=""></option>
                    <option value="crochet"> Crochet </option>
                    <option value="knitting"> Knitting </option>
                    <option value="crossStitch"> Cross Stitch </option>
                    <option value="other"> Other </option>
                </select>
            </div>
            <div className="input-box">
                <label><b>Type of Pattern:</b></label>
                <select name="patternType" id="patternType" value={formData.patternType} onChange={handleChange}>
                    <option value=""></option>
                    <option value="clothing"> Clothing </option>
                    <option value="homeware"> Homeware</option>
                    <option value="toys"> Toys </option>
                    <option value="other"> Other </option>
                </select>
            </div>
            </div>
        </form>
        </div>
        <div id = "Entries">
            {filteredPatterns.length > 0 ? (filteredPatterns.map((entry: any,index: any) => (
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
