export function Entry({entryTitle,image, date, type, brand, color, usedIn})
{
  return(
  <div className = "EntryLayout">
                            <div className = "MaterialImageHolder">
                                <img src = {image} id = "MaterialImage"/>
                            </div>
                            <div className = "MaterialInfo">
                                <div><h2>{entryTitle}</h2></div>
                                <div><p>Date Added: {date}</p></div>
                                <div><p>Material Type:{type}</p></div>
                                <div><p>Brand:{brand}</p></div>
                                <div><p>Color:{color}</p></div>
                                <div><p>Used In:{usedIn} patterns</p></div>
                            </div>
                </div>)
  
}