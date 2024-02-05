import "../../styles/Header.css";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import NavMenu from "./NavMenu/NavMenu";

const Navbar = () => {
  return (
    <>
      {/* Header */}

      <header className="headerContainer">
        <div className="logo">
          <IoSettingsSharp className="logo-icon" />
          <h1>Zin Tools</h1>
        </div>

        <div className="search-bar">
          <form className="search-form">
            <input
              type="text"
              name="searchInput"
              placeholder="Search for Movies, TV Shows, Themes & Cast"
            />
            <span className="search-seprator"></span>
            <button type="submit" className="search-icon">
              <IoIosSearch />
            </button>
          </form>
        </div>

        <div className="header-btn">
          <button className="login-btn">Log in</button>
          <button className="signUp-btn">Sign up</button>
        </div>
      </header>

      {/* Nav Menu */}

      <nav className="navContainer">
        <NavMenu />
      </nav>
    </>
  );
};

export default Navbar;
