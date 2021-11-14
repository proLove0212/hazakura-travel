import "./Navbar.css";
import HazakuraLogo from "../../icon-components/HazakuraLogo";
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
          {/* <p>Destination</p>
          <p>Hotel</p>
          <p>Contacts</p> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
