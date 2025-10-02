import { useState } from "react";
import Button from "./components/Button";
import { nanoid } from "nanoid/non-secure";
import confetti from "canvas-confetti";
export default function TenziGame() {
  function generateRandomValue() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }
  // next state has value of  upper ^ {generateRandomValue} function
  const [next, setNext] = useState(() => generateRandomValue());
  // Won the game function that renders the winning text when all the dices are held
  function won() {
    const win = next.every((btnObj) => btnObj.isHeld && btnObj.value === next[0].value)
    if (win) {
      confetti({
        particleCount: 100,
        angle: 60, // left side se center ki taraf
        spread: 55,
        origin: { x: 0, y: 0.7 }, // left edge
      });
      confetti({
        particleCount: 100,
        angle: 120, // right side se center ki taraf
        spread: 55,
        origin: { x: 1, y: 0.7 }, // right edge
      });
    }
    return win; // returning the win variable {true or false
  }
  won(); // ^ calling the won function

  // toggle function to change color when clicked
  function toggle(id) {
    setNext((prev) =>
      prev.map((btnObj) =>
        btnObj.id === id ? { ...btnObj, isHeld: !btnObj.isHeld } : btnObj
      )
    );
  }
  // roll dice for only those who has isHeld {false} isHeld is false

  function rolldice() {
    if (!won()) {
      setNext((prev) =>
        prev.map((btnObj) =>
          btnObj.isHeld
      ? btnObj
      : { ...btnObj, value: Math.ceil(Math.random() * 6) }
    )
      );
    }
  }

  //  refresh game function
  function refreshPage() {
    setNext(generateRandomValue());
  }

  return (
    <>
      <div className="bg-blue-950 h-screen flex flex-col items-center justify-center">
        {/* refresh button */}
        <button
          onClick={refreshPage}
          className="bg-blue-500 mb-4 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          New Game
        </button>

        {/* Dices */}
        <div className="bg-white flex flex-wrap justify-center items-center w-96 h-86 rounded-lg shadow-lg">
          {next.map((btnObj) => (
            <Button
              key={btnObj.id}
              id={btnObj.id}
              value={btnObj.value}
              isHeld={btnObj.isHeld}
              onClick={() => setHeld((prev) => !prev)}
              toggle={toggle}
            />
          ))}
          {/* Roll button */}
          <button
            onClick={rolldice}
            className="bg-blue-500 hover:bg-blue-700  text-white px-4 py-2 rounded-lg"
          >
           Roll
          </button>
        </div>
      </div>
    </>
  );
}
