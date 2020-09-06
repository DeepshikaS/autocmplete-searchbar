import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Autocomplete from "./component/AutoComplete";
import CountriesList from "./component/CountriesList.json";

function App() {
  const [country, setCountry] = useState("");
  return (
    <div className="App">
      <div className="row">
        <div className="col text-center">
          <h2>Autocomplete Searchbox</h2>
          <br />
          <div className="d-flex justify-content-center">
            <div className="search-bar-container">
              <Autocomplete
                data={CountriesList}
                onSelect={(country) => setCountry(country)}
              />
              <FontAwesomeIcon icon={faSearch} className="search-bar-icon" />
            </div>
          </div>
          {country && (
            <pre className="text-left">{JSON.stringify(country, 0, 2)}</pre>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
