import { TRACKS } from "../data/tracks";
import './DrumPad.css';

const DrumPad = ({ data, pad }) => {
  const handlePlayAudio = trackData => {
    if (data.power) {
      data.onDisplay('--- POWER OFF ---');
    } else {
      const audio = new Audio(trackData.track);

      audio.volume = data.volume / 100;
      audio.play();
  
      data.onDisplay(trackData.name);
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
    <button
      className="drum-pad"
      onKeyDown={handleKeyDown}
      onClick={() => {handleClickPad(pad)}}
    >
      {pad}
    </button>
  )
}

export default DrumPad;