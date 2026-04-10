"use client";
import "../../globals.css";
import "../CSSFormattingSearchPages.css";
import "./CSSFormattingForum.css";
import "../../CSSFormattingHeader.css";
import "../../BaseScript.js";

import React, { useEffect, useState, useMemo } from "react";
import { SignInDirect } from "@/components/signin-redirect";
import { Entry } from "./entry.jsx"

export default function ForumPage( {data} ){
    const [database, setDatabase] = useState<any[]>([]); 
      const [formData, setFormData] = useState({
        textSearch: "",
        author: "",
        tags: "",
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
      const filteredForum = useMemo(() => {
        if (!Array.isArray(database)) return [];
        const q = formData.textSearch.toLowerCase();
    
        return database.filter((entry) => {
          const title = (entry.entryTitle ?? "").toLowerCase();
          const author = (entry.User ?? "").toLowerCase();
          const  tags = (entry.Tags ?? "").toLowerCase();
    
          const matchesText = q === "" || title.includes(q);
          const matchesAuthor = formData.author ? author === formData.author.toLowerCase() : true;
          const matchesTags = formData.tags ? tags === formData.tags.toLowerCase() : true;
    
          return matchesText && matchesAuthor && matchesTags;
        });
      }, [database, formData]);
    
      const onSubmit = (e) => {
        e.preventDefault();
        console.log("Forum Data:", formData);
      };

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
                     <form action="">
                    <div className="PageTitle"><h1><b>Search The Forum!</b></h1></div>
                    <div className="search-container">
                        <input type="text" placeholder="Search..." 
                        className="fa fa-search"
                        id = "textSearch" 
                        name = "textSearch" 
                        value = {formData.textSearch} 
                        onChange={handleChange}/>
                    </div>
                    <div className="Search">
                            <h2>Narrow Your Search Here!</h2>
                            <div className="input-box">
                                <label><b>Tags</b></label>
                                <select name = "tags" id = "tags" value = {formData.tags} onChange={handleChange}>
                                    <option value=""></option>
                                    <option value="crochet">Crochet</option>
                                    <option value="knitting">Knitting</option>
                                    <option value="yarn">Yarn</option>
                                    <option value="fabric">Fabric</option>
                                </select>
                               
                            </div>
                            </div>
                        </form>
                    </div>
            <div id = "Entries">
                {filteredForum.length > 0 ? (filteredForum.map((entry: any,index: any) => (
                            <div key = {index}>
                            <Entry
                              entryTitle = {entry.entryTitle}
                              author={entry.User}
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
        <div className = "reportGuidelines">
            <li> <a href = "/search/report" id = "GoToReport" className = "PageLink">Report Page</a></li>
            <li> <a href = "/search/guidelines" id = "GoToGuidelines" className = "PageLink">Guidelines</a></li>
        </div>
        </div>
        </div>
    </div>
    </div>
}