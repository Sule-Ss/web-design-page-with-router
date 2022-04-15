import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <header>
        <h2>
          <span>Clarusway</span> Web Design
        </h2>

        <ul>
          <li>
            <NavLink to="/" className="home" >HOME</NavLink>
          </li>
          <li>
          <Link to="/about">ABOUT</Link>
          </li>
          <li>
          <Link to="/services">SERVICES</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
