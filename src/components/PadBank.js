import { TRACKS } from "../data/tracks";

const PadBank = ({ power, volume, onDisplay }) => {
  const handlePlayAudio = trackData => {
    if (power) {
      onDisplay('--- POWER OFF ---');
    } else {
      const audio = new Audio(trackData.track);

      audio.volume = volume / 100;
      audio.play();
  
      onDisplay(trackData.name);
    }
  }

  const handleClickPad = (id) => {
    const pad = TRACKS.filter(pad => pad.id === id)[0];
    handlePlayAudio(pad);
  }

  const handleKeyDown = (event) => {
    handleClickPad(event.key.toUpperCase());
  };

  return (
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
  )
}

export default PadBank;