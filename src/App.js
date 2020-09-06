import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AutoComplete from "./component/AutoComplete";
import Autocomplete from "./component/AutoComplete";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col text-center">
          <h2>Autocomplete Search Country Textbox</h2>
          <div className="d-flex justify-content-center">
            <div className="search-bar-container">
              <Autocomplete />
              <FontAwesomeIcon icon="search" className="search-bar-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
