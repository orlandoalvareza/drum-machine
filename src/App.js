function App() {
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">display</div>
        <div className="controls-container">
          <div id="volume-slider">
            <h4 id="volume-header">Volume Control</h4>
            <input/>
          </div>
          <div id ='power-container'>
            <button></button>
          </div>
        </div>
        <div className="pad-bank">
          <button>
            <audio/>
            Q
          </button>
          <button>
            <audio/>
            W
          </button>
          <button>
            <audio/>
            E
          </button>
          <button>
            <audio/>
            A
          </button>
          <button >
            <audio/>
            S
          </button>
          <button>
            <audio/>
            D
          </button>
          <button >
            <audio/>
            Z
          </button>
          <button>
            <audio/>
            X
          </button>
          <button>
            <audio/>
            C
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
