import { Link } from "react-router-dom";
import { useState } from "react";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

  const navbarOptions = [
    {
      title: "Dashboard",
      path: "/admin",
    },
    {
      title: "Entries",
      path: "/entries",
    },
    {
      title: "Students",
      path: "/students",
    },
  ];

  return (
    <div className="navbar">
      <Link to="/">
        <h4>SV25 Center</h4>
      </Link>
      <nav>
        <ul className="navbar-options">
          {navbarOptions.map((option, index) => {
            return (
              <li key={index} className="nav-text">
                <Link to={option.path}>
                  <span>{option.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default Navbar;
