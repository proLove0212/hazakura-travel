import PageInfo from "../Common/PageInfo";
import "./PageStyle2.css";
import Text from "../../text/text.json";

function PageStyle2() {
  return (
    <div className="page-style-2">
      <PageInfo
        header1={Text[1].title[0]}
        title={Text[1].title[1]}
        paragraph1={Text[2].paragraph[2]}
      />
    </div>
  );
}

export default PageStyle2;
