import React, { useState } from "react";
import AutoCompleteItem from "./AutoCompleteItem";
const Autocomplete = () => {
  const [isVisible, setVisibility] = useState(false);

  const showSuggestion = () => setVisibility(true);
  const hideSuggestion = () => setVisibility(false);

  return (
    <div style={{ height: "100%" }}>
      <input
        type="text"
        name="search"
        className="search-box"
        autoComplete="off"
        onClick={showSuggestion}
      />
      <div className={`search-result ${isVisible ? "visible" : "invisible"}`}>
        <ul className="list-group">
          <AutoCompleteItem />
        </ul>
      </div>
    </div>
  );
};

export default Autocomplete;
