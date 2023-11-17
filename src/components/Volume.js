import './Volume.css';

const Volume = ({ onVolume }) => {
  const changeVolumeHandler = (event) => {
    const volumeValue = event.target.value;
    onVolume(volumeValue);
  };

  return (
    <div>
      <h4 className="volume-header">Volume Control</h4>
      <input
        onChange={changeVolumeHandler}
        type="range"
        min="0"
        max="100"
      />
    </div>
  )
}

export default Volume;