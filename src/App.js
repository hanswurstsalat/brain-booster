import React from "react";
import "./Styles.css";
import Settings from "./components/Settings";
import Playground from "./components/Playground";

function App() {
  const titleImageUrl = new URL("./img/title.png", import.meta.url);

  const [numberOfPads, setNumberOfPads] = React.useState(4);
  const [numberOfSteps, setNumberOfSteps] = React.useState(6);
  const [speed, setSpeed] = React.useState("slow");
  const [appearance, setAppearance] = React.useState("symbols");
  const [isRunning, setIsRunning] = React.useState(false);

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
          />
          <Playground
            numberOfPads={numberOfPads}
            appearance={appearance}
            isRunning={isRunning}
          />
          <div className="controls">
            <button type="button" className="startButton">
              Start
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
