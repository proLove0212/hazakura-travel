import "./PageHeader.css";

function PageHeader({ header1, title, paragraph1, paragraph2 }) {
  return (
    <div className="page-header">
      <span className="header-1">{header1}</span>
      <span className="title">{title}</span>
    </div>
  );
}

export default PageHeader;
