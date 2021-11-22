import "./PageHeader.css";

function PageHeader({ header1, title, paragraph1, paragraph2 }) {
  return (
    <div className="page-info">
      <div className="page-header">
        <span className="header-1">{header1}</span>
        <span className="title">{title}</span>
      </div>
      <p className="paragraph 1">{paragraph1}</p>
      <p className="paragraph 2">{paragraph2}</p>
    </div>
  );
}

export default PageHeader;
