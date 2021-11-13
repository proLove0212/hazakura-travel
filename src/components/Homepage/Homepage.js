import "./Homepage.css";
import Navbar from "./Navbar";

function Homepage() {
  return (
    <>
      <Navbar />
      <span className="kanji">京都市</span>
      <div className="text-container">
        <p className="title">Kyoto</p>
        {/* <p className="sub-title">Ancient Traditions</p>
        <p className="sub-title">in modern reflections</p> */}
        <p><span>Ancient Traditions</span><span>in modern reflections</span></p>
      </div>
    </>
  );
}

export default Homepage;
