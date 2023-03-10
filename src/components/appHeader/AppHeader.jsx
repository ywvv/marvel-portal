import { NavLink, Link } from "react-router-dom";

import "./appHeader.scss";

const AppHeader = () => {
  return (
    <header className="app__header">
      <h1 className="app__title">
        <Link to="/">
          <span>Marvel</span> information portal
        </Link>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? { color: "#9f0013" } : null)}
            >
              Characters
            </NavLink>
          </li>
          /
          <li>
            <NavLink
              to="comics"
              style={({ isActive }) => (isActive ? { color: "#9f0013" } : null)}
            >
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
