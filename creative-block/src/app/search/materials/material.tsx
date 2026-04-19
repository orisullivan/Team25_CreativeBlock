"use client";
import "../../globals.css";
import "../../CSSFormattingHeader.css";
import "./CSSFormattingMaterialSearching.css";
import "../CSSFormattingSearchPages.css";
import "../../BaseScript.js";
import "../../TipJarFormatting.css"

import React, { useEffect, useState, useMemo } from "react";
import { SignInDirect } from "@/components/signin-redirect";
import { Entry } from "./entry.jsx";

export default function Material({ data }) {
  const [isVisible, setIsVisible] = useState(false);
      const toggleDiv = () => {
      setIsVisible((prev) => !prev);
      };
  
  const [database, setDatabase] = useState<any[]>([]); 
  const [formData, setFormData] = useState({
    textSearch: "",
    materialType: "",
    materialBrand: "",
    colors: "",
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
  const filteredMaterials = useMemo(() => {
    if (!Array.isArray(database)) return [];
    const q = formData.textSearch.toLowerCase();

    return database.filter((entry) => {
      const title = (entry.MaterialName ?? "").toLowerCase();
      const type = (entry.MaterialType ?? "").toLowerCase();
      const brand = (entry.MaterialBrand ?? "").toLowerCase();
      const color = (entry.MaterialColor ?? "").toLowerCase();

      const matchesText = q === "" || title.includes(q);
      const matchesType = formData.materialType ? type === formData.materialType.toLowerCase() : true;
      const matchesBrand = formData.materialBrand ? brand === formData.materialBrand.toLowerCase() : true;
      const matchesColor = formData.colors ? color === formData.colors.toLowerCase() : true;

      return matchesText && matchesType && matchesBrand && matchesColor;
    });
  }, [database, formData]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Material Form Data:", formData);
  };

  return (
    <div>
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
        <ul className="topnav">
          <div id="header"></div>
          <div className="ProfileBox">
            <SignInDirect className="clickToLogin" />
            <p id="YourUserName" className="Username"> Guest</p>
          </div>
        </ul>
      </header>

      <div className="body">
        <div id="Page">
          <ul className="PageLayout">
            <div className="TitleAndSearch">
              <form onSubmit={onSubmit} id="materialSearchForm">
                <div className="PageTitle"><h1><b>Find a Material!</b></h1></div>

                <div className="search-container">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="fa fa-search"
                    id="textSearch"
                    name="textSearch"
                    value={formData.textSearch}
                    onChange={handleChange}
                  />
                </div>

                <div className="Search">
                  <h2>Narrow Your Search Here!</h2>

                  <div className="input-box">
                    <label><b>Type of Material:</b></label>
                    <select name="materialType" id="materialType" 
                    value={formData.materialType} onChange={handleChange}>
                      <option value=""></option>
                      <option value="yarn">Yarn</option>
                      <option value="fabric">Fabric</option>
                      <option value="thread">Thread</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="input-box">
                    <label><b>Brand:</b></label>
                    <select name="materialBrand" id="materialBrand" 
                    value={formData.materialBrand} onChange={handleChange}>
                      <option value=""></option>
                      <option value="lionBrand">Lion Brand</option>
                      <option value="bernat">Bernat</option>
                      <option value="redHeart">Red Heart</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="input-box">
                    <label htmlFor="colors"><b>Color:</b></label>
                    <select name="colors" id="colors" 
                    value={formData.colors} onChange={handleChange}>
                      <option value=""></option>
                      <option value="red">Red</option>
                      <option value="orange">Orange</option>
                      <option value="yellow">Yellow</option>
                      <option value="green">Green</option>
                      <option value="blue">Blue</option>
                      <option value="purple">Purple</option>
                      <option value="black">Black</option>
                      <option value="white">White</option>
                      <option value="pink">Pink</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>

            <div id="Entries">
              {filteredMaterials.length > 0 ? (
                filteredMaterials.map((entry, index) => (
                  <div key={index}>
                    <Entry
                      entryTitle={entry.MaterialName}
                      image={entry.MaterialImage}
                      type={entry.MaterialType}
                      brand={entry.MaterialBrand}
                      color={entry.MaterialColor}
                      usedIn={entry.UsedIn}
                    />
                  </div>
                ))
              ) : (
                <p>No Materials found</p>
              )}
            </div>
          </ul>

          <div className="AdSpace">
            <h2 id="AdTitle"> Advertisements </h2>
            <img src="/ad1.png" id="ad1" />
            <img src="/ad2.png" id="ad2" />
            <img src="/ad3.png" id="ad3" />
            <img src="/ad4.png" id="ad4" />
            <img src="/ad5.png" id="ad5" />
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
  );
}
