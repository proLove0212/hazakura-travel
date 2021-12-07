import "./RightSection.css";
import Kanji from "./Kanji.js";

function RightSection({image}) {
  return (
    <div className="right-section">
      <Kanji className={"red-京都市"}text={"京都市"} />
      <img src={image} alt="kyoto-street" />
    </div>
  )
}

export default RightSection;