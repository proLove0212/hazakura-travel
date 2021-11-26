import "./CornerImage.css";

function CornerImage({ image }) {
  return (
    <div className="corner-image">
      <img src={image} alt="geisha"/>
    </div>
  );
}

export default CornerImage;
