import "./RightSection.css";
import Kanji from "./Kanji.js";

function RightSection({image}) {
  return (
    <div className="right-section">
      <Kanji text={"京都市"} />
      <img src={image} alt="kyoto-street" />
    </div>
  )
}

export default RightSection;