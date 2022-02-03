import "../styles/Card.css";

function Card({ img, alt, title, text }) {
  return (
    <div className="card">
      <img className="card-image" src={img} alt={alt} />
      <div className="text-container">
        <p>{title}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Card;
