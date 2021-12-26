import "./PageInfo.css";

function PageInfo({
  header1,
  header2,
  title,
  rightTitle,
  paragraph1,
  paragraph2,
  style,
}) {
  console.log(style);
  return (
    <div className="page-info">
      <div className="page-header">
        {/* <span className="header-1">{header1}</span> */}
        {header2 ? (
          <span className="header">{`${header1} \u00A0 \u00A0 • \u00A0 \u00A0 ${header2}`}</span>
        ) : (
          <span className="header">{header1}</span>
        )}
        {rightTitle ? (
          <div className="title-container">
            <span className="title">{title}</span>
            <span className="right-title">{rightTitle}</span>
          </div>
        ) : (
          <span className="title">{title}</span>
        )}
      </div>
      <p className="paragraph 1" style={style}>
        {paragraph1}
      </p>
      {paragraph2 ? <p className="paragraph 2">{paragraph2}</p> : null}
    </div>
  );
}

export default PageInfo;
