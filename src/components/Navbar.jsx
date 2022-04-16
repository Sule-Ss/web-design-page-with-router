import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <header>
        <h2>
          <span>Clarusway</span> Web Design
        </h2>

        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activeClass" : "")}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "activeClass" : "")}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "activeClass" : "")}
            >
              SERVICES
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
