import './Homepage.css';
import Navbar from './Navbar';

function Homepage() {
  return (
    <>
      <Navbar />
      <span className="kanji">京都市</span>
      <div className="text-container">
        <span className="title">Kyoto</span>
      </div>
    </>
  )
}

export default Homepage;