export function Entry({entryTitle,user,image,date, difficulty, craftType, patternType})
{
  return(
  <div className = "EntryLayout">
                        <div className = "PatternImageHolder">
                            <img src = {image} id = "PatternImage"/>
                        </div>
                        <div className = "PatternInfo">
                            <div><h2 className = "PatternEntryTitle">{entryTitle}</h2></div>
                            <div><p>Posted By: {user}</p></div>
                            <div><p>Date Added: {date}</p></div>
                            <div><p>Difficulty: {difficulty}</p></div>
                            <div><p>Craft Type: {craftType}</p></div>
                            <div><p> Pattern Type: {patternType}</p></div>
                        </div>
            </div>)
  
}