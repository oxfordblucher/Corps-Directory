import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='navbar-brand mx-auto text-center'>
            <h1><a href='/'>Employee Directory</a></h1>
            <br></br>
            <h5>Click on carrots to filter by heading or use the search box to narrow your results.</h5>
        </div>
    </nav>
  );
}

export default Navbar;
