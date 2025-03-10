import { useState } from "react";
import "./Spans.css";

function Spans() {
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
      <h1>Spans</h1>
      <div>
        <span>The quick brown fox jumped</span>
        <span>
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
        </span>
        <span>.</span>
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
        <span>show animal</span>
        <span>: </span>
        <span>{String(showAnimal)}</span>
        <br />
        <span>show frog</span>
        <span>: </span>
        <span>{String(showFrog)}</span>
        <br />
      </div>
      <div>
        <span>{info}</span>
      </div>
    </div>
  );
}

export default Spans;
