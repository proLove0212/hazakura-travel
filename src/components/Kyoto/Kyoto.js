import "./Kyoto.css";
import PageInfo from "../Common/PageInfo";
import CornerImage from "../Common/CornerImage";
import fujiden from "../../images/fujiden.jpg"

function Kyoto() {
  const paragraph1 =
    "Kyoto (京都, Kyōto) served as Japan's capital and the emperor's residence from 764 to 1868. It is one of the country's 10 largest cities with a population of 1.5 million and a modern face.";

  const paragraph2 =
    "Although Kyoto is the centre of traditional Japan, it's also a modern city with concerte high-rises, numerous vending machines, and a vibrant food scene. But it's on a smaller more manageable scale than Tokyo and Osaka with plenty of green spaces, view of surrounding hills, and neighborhoods that feel like villages.";

  return (
    <div className="kyoto-container">
      <div className="text-container">
        <PageInfo
          header1="GOLDEN SHADOW"
          title="Kyoto"
          paragraph1={paragraph1}
          paragraph2={paragraph2}
        />
      </div>
        <CornerImage image={fujiden} />
    </div>
  );
}

export default Kyoto;
