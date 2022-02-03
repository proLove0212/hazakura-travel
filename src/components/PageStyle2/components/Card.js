import "../styles/Card.css";

function Card({ img, alt, title, info }) {
  return (
    <div className="card">
      <img className="card-image" src={img} alt={alt} />
      <div className="card-text-container">
        <span className="card-title">{title}</span>
        <span className="card-info">{info}</span>
      </div>
    </div>
  );
}

export default Card;
