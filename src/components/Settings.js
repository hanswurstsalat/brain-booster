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
          />
          <label htmlFor="twelve_pads">12</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Steps:</legend>
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
          />
          <label htmlFor="six_steps">6</label>
        </div>
        <div>
          <input
            type="radio"
            id="ten_steps"
            name="steps"
            value={10}
            checked={numberOfSteps === 10}
            onChange={(event) =>
              handleChangeSteps(parseInt(event.target.value))
            }
          />
          <label htmlFor="ten_steps">10</label>
        </div>
        <div>
          <input
            type="radio"
            id="fourteen_steps"
            name="steps"
            value={14}
            checked={numberOfSteps === 14}
            onChange={(event) =>
              handleChangeSteps(parseInt(event.target.value))
            }
          />
          <label htmlFor="fourteen_steps">14</label>
        </div>
        <div>
          <input
            type="radio"
            id="twenty_steps"
            name="steps"
            value={20}
            checked={numberOfSteps === 20}
            onChange={(event) =>
              handleChangeSteps(parseInt(event.target.value))
            }
          />
          <label htmlFor="twenty_steps">20</label>
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
          />
          <label htmlFor="medium">medium</label>
        </div>
        <div>
          <input
            type="radio"
            id="fast"
            name="speed"
            value="fast"
            checked={speed === "fast"}
            onChange={(event) => handleChangeSpeed(event.target.value)}
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
