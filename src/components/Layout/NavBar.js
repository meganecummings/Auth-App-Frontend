import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import "../../App.css"

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">Pokemon Social</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/register">Register</NavLink>
                </li>
            </ul>
            </div>
            </div>
        </nav>
    );
  };

export default NavBar;