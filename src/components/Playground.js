import React from "react";
import useSound from "use-sound";
import soundsprite from "url:../sound/brain-booster-sound-sprite.mp3";

function Playground({
  numberOfPads,
  speed,
  appearance,
  isRunning,
  handleIsRunning,
  sequence,
  isSequenceRunning,
  handleSequenceRunning,
}) {
  const [isOn, setIsOn] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const [clickCount, setClickCount] = React.useState(0);
  const [overlayIcon, setOverlayIcon] = React.useState("✅");

  const overlayRef = React.useRef();
  const padRef0 = React.useRef();
  const padRef1 = React.useRef();
  const padRef2 = React.useRef();
  const padRef3 = React.useRef();
  const padRef4 = React.useRef();
  const padRef5 = React.useRef();
  const padRef6 = React.useRef();
  const padRef7 = React.useRef();
  const padRef8 = React.useRef();
  const padRef9 = React.useRef();
  const padRef10 = React.useRef();
  const padRef11 = React.useRef();

  const refArray = [
    padRef0,
    padRef1,
    padRef2,
    padRef3,
    padRef4,
    padRef5,
    padRef6,
    padRef7,
    padRef8,
    padRef9,
    padRef10,
    padRef11,
  ];

  function handleClick(padIndex, count) {
    if (isRunning) {
      if (padIndex !== sequence[count]) {
        console.log("error");
        play({ id: "error" });
        handleIsRunning(false);
        setOverlayIcon("❌");
        overlayRef.current.style.background = "rgba(253, 2, 2, 0.5)";
        overlayRef.current.style.display = "block";
      } else {
        const newClickCount = count + 1;
        setClickCount(newClickCount);
        if (newClickCount >= sequence.length) {
          console.log("success");
          play({ id: "success" });
          handleIsRunning(false);
          setOverlayIcon("✅");
          overlayRef.current.style.background = "rgba(10, 253, 2, 0.5)";
          overlayRef.current.style.display = "block";
        }
      }
    }
  }

  function handleMouseDown(padIndex) {
    refArray[padIndex].current.className += " active";
    const playId = `pad_${padIndex}`;
    play({ id: playId });
  }

  function handleMouseUp(padIndex) {
    refArray[padIndex].current.className = refArray[
      padIndex
    ].current.className.replace(" active", "");
  }

  function handleRepeat() {
    setIndex(0);
    setClickCount(0);
    handleIsRunning(true);
    handleSequenceRunning(true);
  }

  function getSpeedInMs(value) {
    switch (value) {
      case "slow":
        return [800, 400];
      case "medium":
        return [500, 250];
      case "fast":
        return [250, 100];
      case "warp":
        return [150, 100];
      default:
        return [800, 400];
    }
  }

  const speedInMs = getSpeedInMs(speed);

  const [play] = useSound(soundsprite, {
    sprite: {
      pad_0: [0, 300],
      pad_1: [500, 300],
      pad_2: [1000, 300],
      pad_3: [1500, 300],
      pad_4: [2000, 300],
      pad_5: [2500, 300],
      pad_6: [3000, 300],
      pad_7: [3500, 300],
      pad_8: [4000, 300],
      pad_9: [4500, 300],
      pad_10: [5000, 300],
      pad_11: [5500, 300],
      success: [6000, 1000],
      error: [8000, 800],
    },
    volume: 0.3,
  });

  //create play-pads
  let pads = [];
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
        onClick={() => handleClick(i, clickCount)}
        onMouseDown={() => handleMouseDown(i)}
        onMouseUp={() => handleMouseUp(i)}
      >
        <div className={`padFront frontDimensions-${numberOfPads} ${color}`}>
          {appearance === "symbols" && <span className={symbolClasses}></span>}
        </div>
      </button>
    );
  }

  //play sound on mount to prevent sound-delay on first pad-click! Bringt leider nix!!:-(
  React.useEffect(() => {
    play({ id: "success" });
  }, []);

  React.useEffect(() => {
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
          }, speedInMs[1]);
        } else {
          refArray[sequence[index]].current.className += " active";
          const playId = `pad_${sequence[index]}`;
          play({ id: playId });
          timeoutId = window.setTimeout(() => {
            setIsOn(true);
          }, speedInMs[0]);
        }
        return () => {
          window.clearTimeout(timeoutId);
        };
      } else {
        setIndex(0);
        handleSequenceRunning(false);
        setClickCount(0);
      }
    }
  }, [isOn, isRunning]);

  return (
    <>
      <div
        ref={overlayRef}
        id="overlay"
        onClick={() => {
          overlayRef.current.style.display = "none";
        }}
      >
        <div id="overlayElements">
          <span className="icon">{overlayIcon}</span>
          <br />
          {clickCount < sequence.length && (
            <button onClick={handleRepeat}>Try again</button>
          )}
        </div>
      </div>
      <div className={`playground container-${numberOfPads}`}>{pads}</div>
    </>
  );
}

export default Playground;
