import { useState } from "react";
import Button from "./components/Button";
import { nanoid } from "nanoid/non-secure";

export default function TenziGame() {
  function generateRandomValue() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }
  // next state has value of  upper ^ {generateRandomValue} function
  const [next, setNext] = useState(generateRandomValue());
  // Won the game function that renders the winning text when all the dices are held
  function won(){
    if (next.every((btnObj) => btnObj.isHeld)) {
      return <div className="mt-10 text-green-500 text-2xl font-bold">You Win this Game</div>
    }
  }
  const win=won(); // ^ calling the won function
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
    setNext((prev) =>
      prev.map((btnObj) =>
        btnObj.isHeld
          ? btnObj
          : { ...btnObj, value: Math.ceil(Math.random() * 6) }
      )
    );
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
          Refresh
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
        {win}
      </div>
    </>
  );
}
