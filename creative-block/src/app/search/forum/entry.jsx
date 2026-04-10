export function Entry({entryTitle,author,date, tags, comments, description,links})
{
  return(
            <div className = "EntryLayout">
                        <div className = "InfoWTitle">
                            <h2 className = "EntryTitle">{entryTitle}</h2>
                                <div className = "Info">
                                  <div> <p>By: {author} </p> </div>
                                  <div><p>Added On: {date}</p> </div>
                                  <div><p>Tags: {tags}</p></div>
                                  <div><p>Comments: {comments}</p></div>
                                </div>    
                        </div>
                        <div>
                                <div id = "Content">
                                    <p> Description: {description} </p>
                                </div>
                                <div id = "Links">  
                                    <p> Mentioned Links: {links}</p> 
                                 </div>
                          </div>      
            </div>)
  
}