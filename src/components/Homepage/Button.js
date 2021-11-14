import "./Button.css";

function Button({ text }) {
  return (
    <>
      <div className="button">
        <span className="button-text">{text}</span>
      </div>
    </>
  );
}

export default Button;
