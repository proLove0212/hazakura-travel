import "./Homepage.css";
import Navbar from "./Navbar";

function Homepage() {
  return (
    <>
      <Navbar />
      <span className="kanji">京都市</span>
      <div className="text-container">
        <p className="title">Kyoto</p>
        <p className="subtitle">
          <span className="subtitle1">Ancient traditions</span>
          <span className="subtitle2">in modern reflections</span>
        </p>
        <p className="kyoto-info">
          <span>Kyoto is a magical city like nowhere else.</span>
          <span>As an imperial capital of Japan for over 1000 years (until 1868),</span>
          <span>it is the heart of Japanese culture.</span>
          <span>Kyoto is Japan in a nutshell. It's the cultural and historical heart</span>
          <span>of the country.</span>
        </p>
      </div>
    </>
  );
}

export default Homepage;
