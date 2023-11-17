import { useState } from 'react';

import './App.css';

function App() {
  const [display, setDisplay] = useState('');
  const [volume, setVolume] = useState(60);
  const [power, setPower] = useState(false);

  function handlePlayAudio(trackData) {
    if (power) {
      setDisplay('--- POWER OFF ---');
    } else {
      const audio = new Audio(trackData.track);
      audio.play();
  
      setDisplay(trackData.name);
    }
  }

  const handleClickPad = (id) => {
    const pad = traks.filter(pad => pad.id === id)[0];
    handlePlayAudio(pad);
  }

  const handleKeyDown = (event) => {
    handleClickPad(event.key.toUpperCase());
  };

  const handleVolume = (event) => {
    const volumeChange = event.target.value;
    setVolume(volumeChange);

    const audioItem = document.querySelectorAll('audio');
    audioItem.forEach((audio) => {
      audio.volume = volumeChange / 100;
    });
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
        <div className="pad-bank">
          <button
            className="drum-pad"
            id="heater-one"
            autoFocus
            onKeyDown={handleKeyDown}
            onClick={() => {handleClickPad('Q')}}
          >
            Q
          </button>
          <button
            className="drum-pad"
            id="heater-two"
            onKeyDown={handleKeyDown}
            onClick={() => {handleClickPad('W')}}
          >
            W
          </button>
          <button
            className="drum-pad"
            id="heater-three"
            onKeyDown={handleKeyDown}
            onClick={() => {handleClickPad('E')}}
          >
            E
          </button>
          <button
            className="drum-pad"
            id="heater-four"
            onKeyDown={handleKeyDown}
            onClick={() => {handleClickPad('A')}}
          >
            A
          </button>
          <button
            className="drum-pad"
            id="Clap"
            onKeyDown={handleKeyDown}
            onClick={() => {handleClickPad('S')}}
          >
            S
          </button>
          <button
            className="drum-pad"
            id="Open-HH"
            onKeyDown={handleKeyDown}
            onClick={() => {handleClickPad('D')}}
          >
            D
          </button>
          <button
            className="drum-pad"
            id="Kick-n-Hat"
            onKeyDown={handleKeyDown}
            onClick={() => {handleClickPad('Z')}}
          >
            Z
          </button>
          <button
            className="drum-pad"
            id="Kick"
            onKeyDown={handleKeyDown}
            onClick={() => {handleClickPad('X')}}
          >
            X
          </button>
          <button
            className="drum-pad"
            id="Closed-HH"
            onKeyDown={handleKeyDown}
            onClick={() => {handleClickPad('C')}}
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

const traks = [
  {
    id: 'Q',
    name: 'HEATER ONE',
    track: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    id: 'W',
    name: 'HEATER TWO',
    track: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    id: 'E',
    name: 'HEADER THREE',
    track: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    id: 'A',
    name: 'HEADER FOUR',
    track: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    id: 'S',
    name: 'CLAP',
    track: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    id: 'D',
    name: 'OPEN HH',
    track: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    id: 'Z',
    name: 'KICK N HAT',
    track: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    id: 'X',
    name: 'KICK',
    track: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    id: 'C',
    name: 'CLOSED HH',
    track: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
]