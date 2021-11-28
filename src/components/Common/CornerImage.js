import "./CornerImage.css";

function CornerImage({ image }) {
  return (
    <div className="corner-image">
      <img src={image} alt="geisha" />
      <div className="redirect">
        <span className="redirect-text">Read more</span>
        <div className="redirect-button">
          <svg id="right">
            <path
              d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z"
              fill="#000"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CornerImage;
