import React from "react";
import "./Styles.css";
import Settings from "./components/Settings";
import Playground from "./components/Playground";

function App() {
  const titleImageUrl = new URL("./img/title.png", import.meta.url);

  const [numberOfPads, setNumberOfPads] = React.useState(4);
  const [numberOfSteps, setNumberOfSteps] = React.useState(4);
  const [speed, setSpeed] = React.useState("slow");
  const [appearance, setAppearance] = React.useState("symbols");
  const [isRunning, setIsRunning] = React.useState(false);
  const [sequence, setSequence] = React.useState([]);
  const [isSequenceRunning, setIsSequenceRunning] = React.useState(false);

  function handleChangePads(value) {
    setNumberOfPads(value);
  }

  function handleChangeSteps(value) {
    setNumberOfSteps(value);
  }

  function handleChangeSpeed(value) {
    setSpeed(value);
  }

  function handleChangeAppearance(value) {
    setAppearance(value);
  }

  function handleIsRunning(value) {
    setIsRunning(value);
  }

  function handleSequenceRunning(value) {
    setIsSequenceRunning(value);
  }

  function handleStartClick(pads, steps) {
    const newIsRunning = !isRunning;
    setIsRunning(newIsRunning);
    if (newIsRunning) {
      //create sequence-arry with random values
      const sequenceArray = [];
      for (let i = 0; i < steps; i++) {
        sequenceArray.push(Math.floor(Math.random() * pads));
      }
      setSequence(sequenceArray);
      setIsSequenceRunning(true);
    }
  }

  return (
    <>
      <img className="titleImg" src={titleImageUrl} alt="BrainBooster" />
      <div className="outerWrapper">
        <div className="innerWrapper">
          <Settings
            numberOfPads={numberOfPads}
            numberOfSteps={numberOfSteps}
            speed={speed}
            appearance={appearance}
            handleChangePads={handleChangePads}
            handleChangeSteps={handleChangeSteps}
            handleChangeSpeed={handleChangeSpeed}
            handleChangeAppearance={handleChangeAppearance}
            isRunning={isRunning}
          />
          <Playground
            numberOfPads={numberOfPads}
            speed={speed}
            appearance={appearance}
            isRunning={isRunning}
            handleIsRunning={handleIsRunning}
            sequence={sequence}
            isSequenceRunning={isSequenceRunning}
            handleSequenceRunning={handleSequenceRunning}
          />
          <div className="controls">
            <button
              type="button"
              className="startButton"
              onClick={() => handleStartClick(numberOfPads, numberOfSteps)}
              disabled={isSequenceRunning}
            >
              {isRunning ? "Reset" : "Start"}
            </button>
          </div>
        </div>
      </div>
      <span className="author">by Geraldo</span>
    </>
  );
}

export default App;
