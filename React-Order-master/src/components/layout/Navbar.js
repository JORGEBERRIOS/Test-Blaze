import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
          BLAZE
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">

            <li className="nav-item">
              <NavLink className="nav-link" exact to="/orders">
                Orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/products">
                Products
              </NavLink>
            </li>

          </ul>
        </div>

        <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
      </div>
    </nav>
  );
};

export default Navbar;
