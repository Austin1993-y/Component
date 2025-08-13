import { useState } from "react"
import "./AutoCompleteNew.css"

function AutoCompleteNew({suggestions}){
    
    const [input,setInput] = useState('')
    const [filtered,setFiltered] = useState([])
    const [showSuggestions,setShowSuggestions] = useState(false)

    const handleChange=(e)=>{
        let userInput
        userInput =e.target.value 
        setInput(userInput)

        const showFilteredSuggestion = suggestions.filter((item)=>(
            item.toLowerCase().startsWith(userInput.toLowerCase())
        ))

        setFiltered(showFilteredSuggestion)
        setShowSuggestions(true)
    }

    const handleClick=(suggestion)=>{
        setInput(suggestion)
        setFiltered([])
        setShowSuggestions(false)
    }
    return(
        <div>
            <input
            value={input}
            type="text"
            placeholder="Enter Text Here"
            onChange={handleChange}/>

            {showSuggestions&&input&&(
                <ul className="list">
                    {filtered.length>0? (
                       filtered.map((suggestion,index)=>(
                            <li key={index} onClick={()=>handleClick(suggestion)}>{suggestion}</li>
                       )) 
                    ) :(<li>No Suggestions</li>)}
                </ul>
            )}

            <p>{input}</p>
        </div>
    )
}

export default AutoCompleteNew