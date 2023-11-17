import './Power.css';

const Power = ({ onPower, power }) => {
  return (
    <div 
      className={power ? 'power-container-off' : 'power-container-on'} 
      id = 'power-container'
    >
      <button
        onClick={onPower}
        className={power ? 'power-button-off' : 'power-button-on'} 
        id = 'power-button'
      ></button>
    </div>
  )
}

export default Power;