import "./Kanji.css";

function Kanji({ className, text }) {
  return (
    <>
      <span className={`kanji-${className}`}>{text}</span>
    </>
  );
}

export default Kanji;
