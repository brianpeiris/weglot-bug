import { useState } from "react";
import "./Text.css";

function Text() {
  const [showAnimal, setShowAnimal] = useState(true);
  const [showFrog, setShowFrog] = useState(false);
  const [info, setInfo] = useState("");
  function handleClick() {
    const text = Date.now() + " clicked";
    console.log(text);
    setInfo(text);
  }
  return (
    <div>
      <h1>Text Nodes</h1>
      <div>
        The quick brown fox jumped
        {showAnimal ? (
          showFrog ? (
            <>
              {" "}
              over the{" "}
              <button onClick={handleClick} className="inline-button">
                lazy
              </button>{" "}
              frog
            </>
          ) : (
            " over the lazy dog"
          )
        ) : (
          ""
        )}
        .
      </div>
      <div>
        <button
          disabled={!showAnimal}
          onClick={() => setShowFrog((showFrog) => !showFrog)}
        >
          Toggle frog
        </button>
        <button onClick={() => setShowAnimal((showAnimal) => !showAnimal)}>
          Toggle animal
        </button>
      </div>
      <div>
        show animal: {String(showAnimal)}
        <br />
        show frog: {String(showFrog)}
        <br />
        {info}
      </div>
    </div>
  );
}

export default Text;
