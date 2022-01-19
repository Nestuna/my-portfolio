import React from "react";
import "./NavBar.scss";
import { AppBar } from "@mui/material";

const NavBar: React.FC = () => {
  const menuEntries: string[] = ["home", "skills", "projects", "contacts"];

  const showMenuEntries = () => {
    return menuEntries.map((entry) => (
      <li>
        <a href={`#${entry}`}>{entry.toUpperCase()}</a>
      </li>
    ));
  };
  return (
    <AppBar
        style={{ background: '#16131D', padding: '0 3rem' }}
        position="sticky">
        <div className="navbar-container">
          <div className="navbar-left_logo-container">
            <h3>N.A</h3>
          </div>
          <div className="navbar-right_menu-container">
            <ul className="nav-bar_menu-list">
              {showMenuEntries()}
            </ul>
          </div>
        </div>
    </AppBar>
  );
}
export default NavBar;