import{ useState } from "react";
import "./index.css"

const AutoComplete = ({ suggestions }) => {
  const [input, setInput] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e) => {
    const userInput = e.target.value;
    setInput(userInput);

    const filteredSuggestions = suggestions.filter((item) =>
      item.toLowerCase().startsWith(userInput.toLowerCase())
    );
    setFiltered(filteredSuggestions);
    setShowSuggestions(true);
  };

  const handleClick = (suggestion) => {
    setInput(suggestion);
    setFiltered([]);
    setShowSuggestions(false);
  };


  return (
    <div className="autocomplete">
      <input
        type="text"
        onChange={handleChange}
        value={input}
        placeholder="Type to search..."
      />
      {showSuggestions && input && (
        <ul className="suggestions">
          {filtered.length > 0 ? (
            filtered.map((suggestion, index) => (
              <li key={index} onClick={() => handleClick(suggestion)}>
                {suggestion}
              </li>
            ))
          ) : (
            <li>No suggestions</li>
          )}
        </ul>
      )}
   <p>{input}</p>
    </div>
  );
};

export default AutoComplete;
