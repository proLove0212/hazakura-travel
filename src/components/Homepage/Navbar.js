import "./Navbar.css";
import HazakuraLogo from "../Icons/HazakuraLogo";
import Header from "./Header";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="gap"></div>
        <HazakuraLogo />
        <div className="header-container">
          <Header name="Kyoto" />
          <Header name="Destination" />
          <Header name="Hotel" />
          <Header name="Contacts" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
