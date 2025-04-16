import "./Styles.css";
import titleImg from "./img/title.png";

export function App() {
  const titleImageUrl = new URL("./img/title.png", import.meta.url);

  return (
    <>
      <img className="titleImg" src={titleImageUrl} alt="BrainBooster" />
      <div className="outerWrapper">
        <div className="innerWrapper"></div>
      </div>
    </>
  );
}
