import { useState } from "react";
import "./App.css";

function App() {
  const [showAnimal, setShowAnimal] = useState(true);
  const [showFrog, setShowFrog] = useState(false);
  const [info, setInfo] = useState("");
  function handleClick() {
    setInfo(Date.now() + " clicked");
  }
  return (
    <div>
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

export default App;
