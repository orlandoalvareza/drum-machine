import DrumPad from "./DrumPad";
import './PadBank.css';

const PadBank = (props) => {
  return (
    <div className="pad-bank">
      <DrumPad data={props} pad={'Q'}/>
      <DrumPad data={props} pad={'W'}/>
      <DrumPad data={props} pad={'E'}/>
      <DrumPad data={props} pad={'A'}/>
      <DrumPad data={props} pad={'S'}/>
      <DrumPad data={props} pad={'D'}/>
      <DrumPad data={props} pad={'Z'}/>
      <DrumPad data={props} pad={'X'}/>
      <DrumPad data={props} pad={'C'}/>
    </div>
  )
}

export default PadBank;