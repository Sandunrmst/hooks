import React, { useEffect, useState } from "react";

const Hookuseeffect = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    console.log("Run oly onces");
  }, []);

  useEffect(() => {
    if (count === 4) {
      setShowText(true);
    }
  }, [count]);

  return (
    <div className="p-5 border rounded-md mt-5 w-full">
      <h1 className="text-3xl text-orange-400 font-bold mb-5">
        Use Effect Hook
      </h1>
      <p>Count is {count}</p>
      {showText ? <p>Hey, you reached 4!</p> : null}
      <button
        className="p-2 bg-orange-400 rounded-md mt-2 font-semibold text-yellow-50 hover:bg-orange-500 duration-200"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Hookuseeffect;
