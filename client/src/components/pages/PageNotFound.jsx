import React from "react";
import Nav from "../Nav.jsx";

const PageNotFound = () => {
  return (
    <div>
      <Nav />
      <div className="error">
        <h3>Error: 404</h3>
        <p>Sorry, page not found</p>
      </div>
    </div>
  );
};

export default PageNotFound;
