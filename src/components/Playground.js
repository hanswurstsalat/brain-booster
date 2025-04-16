import React from "react";

function Playground({ numberOfPads, appearance, isRunning }) {
  let pads = [];

  for (let i = 0; i < numberOfPads; i++) {
    const color =
      appearance === "symbols" ? "colorSymbols" : "color-" + (i + 1);

    const symbolClasses = `symbols-${numberOfPads} symbol symbol-${i + 1}`;

    const key = `${appearance}-${i}`;

    pads.push(
      <button
        key={key}
        id={key}
        className={`padBack backDimensions-${numberOfPads}`}
        disabled={!isRunning}
      >
        <div className={`padFront frontDimensions-${numberOfPads} ${color}`}>
          {appearance === "symbols" && <span className={symbolClasses}></span>}
        </div>
      </button>
    );
  }

  return <div className={`playground container-${numberOfPads}`}>{pads}</div>;
}

export default Playground;
