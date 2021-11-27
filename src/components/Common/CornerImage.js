import "./CornerImage.css";

function CornerImage({ image }) {
  return (
    <div className="corner-image">
      <img src={image} alt="geisha"/>
      <div className="redirect">
        <span className="redirect-text">Read more</span>
        <div className="redirect-button">

        </div>
      </div>
    </div>
  );
}

export default CornerImage;
