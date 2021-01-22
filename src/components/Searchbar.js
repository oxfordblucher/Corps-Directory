import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Searchbar(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="name"
          list="names"
          type="text"
          className="form-control"
          placeholder="Type in a name to filter by."
          id="breed"
        />
      </div>
    </form>
  );
}

export default Searchbar;
