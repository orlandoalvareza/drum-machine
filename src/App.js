import { useState } from 'react';

import Volume from './components/Volume';
import Power from './components/Power';
import PadBank from './components/PadBank';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');
  const [volume, setVolume] = useState(60);
  const [power, setPower] = useState(false);

  const handleDisplay = (trackName) => {
    setDisplay(trackName);
  }

  const handleVolume = (newVolume) => {
    setVolume(newVolume);
  };

  const handlePower = () => {
    setPower(power => !power);
  };

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">{display}</div>
        <div className="controls-container">
          <Volume onVolume={handleVolume}/>
          <Power onPower={handlePower} power={power}/>
        </div>
        <PadBank 
          power={power} 
          volume={volume} 
          onDisplay={handleDisplay}
        />
      </div>
    </div>
  );
}

export default App;