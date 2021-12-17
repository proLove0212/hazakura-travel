import "./PageInfo.css";

function PageInfo({ header1, header2, title, paragraph1, paragraph2 }) {
  return (
    <div className="page-info">
      <div className="page-header">
        {/* <span className="header-1">{header1}</span> */}
        {header2 ? (
          <span className="header">{`${header1} \u00A0 \u00A0 • \u00A0 \u00A0 ${header2}`}</span>
        ) : (
          <span className="header">{header1}</span>
        )}
        <span className="title">{title}</span>
      </div>
      <p className="paragraph 1">{paragraph1}</p>
      {paragraph2 ? <p className="paragraph 2">{paragraph2}</p> : null}
    </div>
  );
}

export default PageInfo;
