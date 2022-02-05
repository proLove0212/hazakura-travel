import PageInfo from "../../Common/PageInfo";
import "../styles/PageStyle2.css";
import Text from "../../../text/text.json";
import Card from "./Card";
import Kinkakuji from "../../../images/kinkakuji.jpg";
import Fushimi from "../../../images/fushimi-inari-shrine.jpg";
import Kiyomizu_dera_gate from "../../../images/kiyomizu-dera-gate.jpg";

function PageStyle2() {
  return (
    <div className="page-style-2">
      <PageInfo
        header1={Text[0].header[1]}
        header2={Text[0].header[2]}
        title={Text[1].title[1]}
        rightTitle={Text[3].rightTitle[0]}
        paragraph1={Text[2].paragraph[2]}
        // p style when no paragraph2
        paragraphStyle={{ width: "40em" }}
        // info style when rightTitle exists to expand to the right
        infoStyle={{ width: "100%" }}
      />
      <div className="cards-container">
        <Card img={Kinkakuji} alt="Kinkakuji" title="Kinkakuji" info="A Zen Temple in Northern Tokyo whose top 2 floors are completely covered in golden leaf." />
        <Card img={Fushimi} alt="Fushimi" title="Fushimi Inari Shrine" info="The most important of several thousands of shrines dedicated to Inari, the Shinto god of rice." />
        <Card img={Kiyomizu_dera_gate} alt="Kiyomizu_dera_gate" title="Kiyomizu-dera" info="One of the most celebrated temples in Japan. Was added to the list of UNESECO world heritage sies." />
      </div>
    </div>
  );
}

export default PageStyle2;
