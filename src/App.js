import React, { useState } from "react";
import useCounter from "./useCounter";

const App = () => {
  const [min, setMin] = useState("");
  const [reset, setReset] = useState(false);
  const [pause, setPause] = useState(false);

  const [hours, minutes, seconds] = useCounter(min, reset, pause);

  const handleChange = (e) => {
    e.preventDefault();
    let userMinutes = parseInt(e.target.value, 10);

    let userMinutesMs = userMinutes * 60 * 1000;
    setMin(new Date().getTime() + userMinutesMs);
  };

  const handleStart = () => {
    if (pause === true) setPause(false);
    else setPause(true);
  };

  const handleReset = () => {
    setReset(true);
    setMin("");
  };

  const handlePause = () => {
    setPause(true);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <form className="">
          <label className="text-sky-400 font-bold">
            Enter Minutes
            <div className="border-2 border-gray-500 rounded">
              <input
                className="bg-slate-950 p-2 rounded w-full"
                type="text"
                name="min"
                onChange={handleChange}
              />
            </div>
          </label>

          <div className="flex flex-row justify-center p-4">
            <div className="pl-3">
              <button onClick={handleStart} type="button">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/fluency/48/circled-play.png"
                  alt="circled-play"
                />
              </button>
            </div>
            <div className="my-auto text-2xl text-sky-400 font-bold pl-2">
              <p>{hours}</p>
            </div>
            <div className="my-auto text-2xl text-sky-400 font-bold">:</div>
            <div className="my-auto text-2xl text-sky-400 font-bold">
              <p>{minutes}</p>
            </div>
            <div className="my-auto text-2xl text-sky-400 font-bold">:</div>
            <div className="my-auto text-2xl text-sky-400 font-bold">
              <p>{seconds}</p>
            </div>
          </div>

          <div className="grid justify-center p-5 gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
            >
              Reset
            </button>
            <button
              onClick={handlePause}
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
            >
              Pause
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
