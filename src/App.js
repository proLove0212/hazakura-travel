import './App.css';
import Homepage from './components/Homepage/Homepage';
import Kyoto from './components/Kyoto/Kyoto';
import PageStyle2 from './components/PageStyle2/PageStyle2';

function App() {
  return (
    <div className="app">
      <Homepage />
      <Kyoto />
      <PageStyle2 header1="Kyoto" title="IMMORTAL RICHES"/>
    </div>
  );
}

export default App;
