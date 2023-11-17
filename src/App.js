import { useState } from 'react';

import PadBank from './components/PadBank';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');
  const [volume, setVolume] = useState(60);
  const [power, setPower] = useState(false);

  const handleDisplay = (trackName) => {
    setDisplay(trackName);
  }

  const handleVolume = (event) => {
    const newVolume = event.target.value;
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
          <div id="volume-slider">
            <h4 id="volume-header">Volume Control</h4>
            <input
              onChange={handleVolume}
              type="range"
              value={volume}
              min="0"
              max="100"
            />
          </div>
          <div className={power ? 'power-container-off' : 'power-container-on'} id = 'power-container'>
            <button
              onClick={handlePower}
              className={power ? 'power-button-off' : 'power-button-on'} id = 'power-button'
            ></button>
          </div>
        </div>
        <PadBank power={power} volume={volume} onDisplay={handleDisplay}/>
      </div>
    </div>
  );
}

export default App;