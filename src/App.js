import { useState } from 'react';

import './App.css';

function App() {
  const [display, setDisplay] = useState('');
  const [volume, setVolume] = useState(60);
  const [power, setPower] = useState(false);

  function playMedia(letter, track) {
    const audio = document.getElementById(letter);
    audio.play();
    setDisplay(track);
  }

  function playAudio(letter, track) {
    const KEY_Q = 81;
    const KEY_W = 87;
    const KEY_E = 69;
    const KEY_A = 65;
    const KEY_S = 83;
    const KEY_D = 68;
    const KEY_Z = 90;
    const KEY_X = 88;
    const KEY_C = 67;

    playMedia(letter, track);

    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case KEY_Q:
          playMedia('Q', 'HEATER ONE');
          break;
        case KEY_W:
          playMedia('W', 'HEATER TWO');
          break;
        case KEY_E:
          playMedia('E', 'HEADER THREE');
          break;
        case KEY_A:
          playMedia('A', 'HEADER FOUR');
          break;
        case KEY_S:
          playMedia('S', 'CLAP');
          break;
        case KEY_D:
          playMedia('D', 'OPEN HH');
          break;
        case KEY_Z:
          playMedia('Z', 'KICK N HAT');
          break;
        case KEY_X:
          playMedia('X', 'KICK');
          break;
        case KEY_C:
          playMedia('C', 'CLOSED HH');
          break;
        default:
          break;
      }
    });
  }

  const handleVolume = (event) => {
    const volumeChange = event.target.value;
    setVolume(volumeChange);

    const audioItem = document.querySelectorAll('audio');
    audioItem.forEach((audio) => {
      audio.volume = volumeChange / 100;
    });
  };

  const handlePower = () => {
    setPower(!power);
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
            onClick={() => {
              playAudio('Q', 'HEATER ONE');
            }}
          >
            <audio
              className="clip"
              id="Q"
              src={
                power
                  ? '#'
                  : 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
              }
            />
            Q
          </button>
          <button
            className="drum-pad"
            id="heater-two"
            onClick={() => {
              playAudio('W', 'HEATER TWO');
            }}
          >
            <audio
              className="clip"
              id="W"
              src={
                power
                  ? '#'
                  : 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
              }
            />
            W
          </button>
          <button
            className="drum-pad"
            id="heater-three"
            onClick={() => {
              playAudio('E', 'HEADER THREE');
            }}
          >
            <audio
              className="clip"
              id="E"
              src={
                power
                  ? '#'
                  : 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
              }
            />
            E
          </button>
          <button
            className="drum-pad"
            id="heater-four"
            onClick={() => {
              playAudio('A', 'HEADER FOUR');
            }}
          >
            <audio
              className="clip"
              id="A"
              src={
                power
                  ? '#'
                  : 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
              }
            />
            A
          </button>
          <button
            className="drum-pad"
            id="Clap"
            onClick={() => {
              playAudio('S', 'CLAP');
            }}
          >
            <audio
              className="clip"
              id="S"
              src={
                power
                  ? '#'
                  : 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
              }
            />
            S
          </button>
          <button
            className="drum-pad"
            id="Open-HH"
            onClick={() => {
              playAudio('D', 'OPEN HH');
            }}
          >
            <audio
              className="clip"
              id="D"
              src={
                power
                  ? '#'
                  : 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
              }
            />
            D
          </button>
          <button
            className="drum-pad"
            id="Kick-n-Hat"
            onClick={() => {
              playAudio('Z', 'KICK N HAT');
            }}
          >
            <audio
              className="clip"
              id="Z"
              src={
                power
                  ? '#'
                  : 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
              }
            />
            Z
          </button>
          <button
            className="drum-pad"
            id="Kick"
            onClick={() => {
              playAudio('X', 'KICK');
            }}
          >
            <audio
              className="clip"
              id="X"
              src={
                power
                  ? '#'
                  : 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
              }
            />
            X
          </button>
          <button
            className="drum-pad"
            id="Closed-HH"
            onClick={() => {
              playAudio('C', 'CLOSED HH');
            }}
          >
            <audio
              className="clip"
              id="C"
              src={
                power
                  ? '#'
                  : 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
              }
            />
            C
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
