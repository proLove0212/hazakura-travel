import PageInfo from "../../Common/PageInfo";
import "../styles/PageStyle2.css";
import Text from "../../../text/text.json";
import Card from "./Card";
import Kinkakuji from "../../../images/kinkakuji.jpg";

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
        // info style when rightTitle exists
        infoStyle={{ width: "100%" }}
      />
      <div className="card-container">
        <Card img={Kinkakuji} alt="Kinkakuji" title="Kinkakuji" text="A Zen Temple in Northern Tokyo whose top 2 floors are completely covered in golden leaf" />
      </div>
    </div>
  );
}

export default PageStyle2;
