import "./CornerImage.scss";

function CornerImage({ image }) {
  return (
    <div className="corner-image">
      <img src={image} alt="geisha" />
      <div className="redirect">
        <div className="redirect-button">
          <span className="redirect-text">Read more</span>
          <svg id="right">
            <path
              d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z"
              fill="#fff"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CornerImage;
