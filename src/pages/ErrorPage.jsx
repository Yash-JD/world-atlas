import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Opps! an error occured.</h1>
      <NavLink to="/">
        <button>Go Home</button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
