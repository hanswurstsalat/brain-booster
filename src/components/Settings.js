import React from "react";

function Settings({
  numberOfPads,
  numberOfSteps,
  speed,
  appearance,
  handleChangePads,
  handleChangeSteps,
  handleChangeSpeed,
  handleChangeAppearance,
  isRunning,
}) {
  return (
    <div className="settings">
      <fieldset>
        <legend>Pads:</legend>
        <div>
          <input
            type="radio"
            id="four_pads"
            name="pads"
            value={4}
            checked={numberOfPads === 4}
            onChange={(event) => handleChangePads(parseInt(event.target.value))}
            disabled={isRunning}
          />
          <label htmlFor="four_pads">4</label>
        </div>
        <div>
          <input
            type="radio"
            id="six_pads"
            name="pads"
            value={6}
            checked={numberOfPads === 6}
            onChange={(event) => handleChangePads(parseInt(event.target.value))}
            disabled={isRunning}
          />
          <label htmlFor="six_pads">6</label>
        </div>
        <div>
          <input
            type="radio"
            id="nine_pads"
            name="pads"
            value={9}
            checked={numberOfPads === 9}
            onChange={(event) => handleChangePads(parseInt(event.target.value))}
            disabled={isRunning}
          />
          <label htmlFor="nine_pads">9</label>
        </div>
        <div>
          <input
            type="radio"
            id="twelve_pads"
            name="pads"
            value={12}
            checked={numberOfPads === 12}
            onChange={(event) => handleChangePads(parseInt(event.target.value))}
            disabled={isRunning}
          />
          <label htmlFor="twelve_pads">12</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Steps:</legend>
        <div>
          <input
            type="radio"
            id="four_steps"
            name="steps"
            value={4}
            checked={numberOfSteps === 4}
            onChange={(event) =>
              handleChangeSteps(parseInt(event.target.value))
            }
            disabled={isRunning}
          />
          <label htmlFor="six_steps">4</label>
        </div>
        <div>
          <input
            type="radio"
            id="six_steps"
            name="steps"
            value={6}
            checked={numberOfSteps === 6}
            onChange={(event) =>
              handleChangeSteps(parseInt(event.target.value))
            }
            disabled={isRunning}
          />
          <label htmlFor="ten_steps">6</label>
        </div>
        <div>
          <input
            type="radio"
            id="nine_steps"
            name="steps"
            value={9}
            checked={numberOfSteps === 9}
            onChange={(event) =>
              handleChangeSteps(parseInt(event.target.value))
            }
            disabled={isRunning}
          />
          <label htmlFor="fourteen_steps">9</label>
        </div>
        <div>
          <input
            type="radio"
            id="twelve_steps"
            name="steps"
            value={12}
            checked={numberOfSteps === 12}
            onChange={(event) =>
              handleChangeSteps(parseInt(event.target.value))
            }
            disabled={isRunning}
          />
          <label htmlFor="twenty_steps">12</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Speed:</legend>
        <div>
          <input
            type="radio"
            id="slow"
            name="speed"
            value="slow"
            checked={speed === "slow"}
            onChange={(event) => handleChangeSpeed(event.target.value)}
            disabled={isRunning}
          />
          <label htmlFor="slow">slow</label>
        </div>
        <div>
          <input
            type="radio"
            id="medium"
            name="speed"
            value="medium"
            checked={speed === "medium"}
            onChange={(event) => handleChangeSpeed(event.target.value)}
            disabled={isRunning}
          />
          <label htmlFor="medium">mid</label>
        </div>
        <div>
          <input
            type="radio"
            id="fast"
            name="speed"
            value="fast"
            checked={speed === "fast"}
            onChange={(event) => handleChangeSpeed(event.target.value)}
            disabled={isRunning}
          />
          <label htmlFor="fast">fast</label>
        </div>
        <div>
          <input
            type="radio"
            id="warp"
            name="speed"
            value="warp"
            checked={speed === "warp"}
            onChange={(event) => handleChangeSpeed(event.target.value)}
            disabled={isRunning}
          />
          <label htmlFor="warp">warp</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>👀</legend>
        <div>
          <input
            type="radio"
            id="symbols"
            name="style"
            value="symbols"
            checked={appearance === "symbols"}
            onChange={(event) => handleChangeAppearance(event.target.value)}
            disabled={isRunning}
          />
          <label htmlFor="symbols" title="Symbols">
            🌞
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="colors"
            name="style"
            value="colors"
            checked={appearance === "colors"}
            onChange={(event) => handleChangeAppearance(event.target.value)}
            disabled={isRunning}
          />
          <label htmlFor="colors" title="Colors">
            🌈
          </label>
        </div>
      </fieldset>
    </div>
  );
}

export default Settings;
