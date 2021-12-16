import "./Kyoto.css";
import PageInfo from "../Common/PageInfo";
import CornerImage from "../Common/CornerImage";
import RightSection from "../Common/RightSection";
import Fujiden from "../../images/fujiden.jpg";
import KyotoStreet from "../../images/kyoto-street.jpg";
import Text from "../../text/text.json";

function Kyoto() {
  return (
    <div className="kyoto-container">
      <div className="text-container">
        <PageInfo
          header1={Text[0].header[0]}
          title={Text[1].title[0]}
          paragraph1={Text[2].paragraph[0]}
          paragraph2={Text[2].paragraph[1]}
        />
      </div>
      <CornerImage image={Fujiden} text={"Read More"} />
      <RightSection image={KyotoStreet} />
    </div>
  );
}

export default Kyoto;
