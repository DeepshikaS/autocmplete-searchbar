import React from "react";
import Autocomplete from "./AutoComplete";

const AutoCompleteItem = () => {
  return (
    <li className={`list-group-item`}>
      <div className="row">
        <div className="col text-left">
          <p className="mb-0 font-weight-bold line-height-1">
            Country Name <img src="" alt="" style={{ width: "30px" }} />
          </p>
          <p className="mb-0 badge badge-primary">Continent</p>
          <p className="mb-0 ml-2 badge badge-secondary">capital</p>
        </div>
      </div>
    </li>
  );
};

export default AutoCompleteItem;
