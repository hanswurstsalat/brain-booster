import React from "react";

function Playground({
  numberOfPads,
  appearance,
  isRunning,
  sequence,
  isSequenceRunning,
  handleSequenceRunning,
}) {
  let pads = [];

  const padRef0 = React.useRef();
  const padRef1 = React.useRef();
  const padRef2 = React.useRef();
  const padRef3 = React.useRef();

  const refArray = [padRef0, padRef1, padRef2, padRef3];

  const [isOn, setIsOn] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    console.log(index);
    if (isRunning) {
      if (index < sequence.length) {
        let timeoutId;
        if (isOn) {
          refArray[sequence[index]].current.className = refArray[
            sequence[index]
          ].current.className.replace(" active", "");
          timeoutId = window.setTimeout(() => {
            setIsOn(false);
            setIndex(index + 1);
          }, 500);
        } else {
          refArray[sequence[index]].current.className += " active";
          timeoutId = window.setTimeout(() => {
            setIsOn(true);
          }, 1000);
        }
        return () => {
          window.clearTimeout(timeoutId);
        };
      } else {
        setIndex(0);
        handleSequenceRunning(false);
      }
    }
  }, [isOn, isRunning]);

  for (let i = 0; i < numberOfPads; i++) {
    const color =
      appearance === "symbols" ? "colorSymbols" : "color-" + (i + 1);
    const symbolClasses = `symbols-${numberOfPads} symbol symbol-${i + 1}`;
    const key = `${appearance}-${i}`;

    pads.push(
      <button
        ref={refArray[i]}
        key={key}
        id={key}
        className={`padBack backDimensions-${numberOfPads}`}
        disabled={isSequenceRunning}
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
