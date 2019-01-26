import React from "react";
import { Link } from "react-router-dom"

const Nav = () => (
  <nav className="navbar navbar-light bg-light sticky-top">
    <span className="navbar-brand mr-auto">New York Times Article Search</span>
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link to={"/"}>
            Home
          </Link>
        </li>
        <li className="nav-item ml-3">
          <Link to={"/saved"}>
            Saved
          </Link>
        </li>
        
      </ul>
    </div>
  </nav>
)

export default Nav;