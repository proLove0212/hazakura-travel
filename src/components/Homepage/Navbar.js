import "./Navbar.css";
import HazakuraLogo from "../../icon-components/HazakuraLogo";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="gap"></div>
        <HazakuraLogo />
        <div className="headers">
          <p>Kyoto</p>
          <p>Destination</p>
          <p>Hotel</p>
          <p>Contacts</p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
