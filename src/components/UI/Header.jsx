import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/" className="navlink">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/" className="navlink">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="navlink">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/country" className="navlink">
                  Country
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="navlink">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
