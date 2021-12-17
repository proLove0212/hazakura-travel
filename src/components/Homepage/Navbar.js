import "./Navbar.css";
import HazakuraLogo from "../Icons/HazakuraLogo";
import NavButton from "./NavButton";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="gap"></div>
        <HazakuraLogo />
        <div className="nav-button-container">
          <NavButton name="Kyoto" />
          <NavButton name="Destination" />
          <NavButton name="Hotel" />
          <NavButton name="Contacts" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
