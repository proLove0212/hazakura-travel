import "./Header.scss";

function Header({ name }) {
  return (
    <>
      <span className="raise">{name}</span>
    </>
  );
}

export default Header;
