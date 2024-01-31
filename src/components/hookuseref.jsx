import React, { useEffect, useRef } from "react";

const Hookuseref = () => {
  const countValue = useRef(0);
  const divReference = useRef();
  const inputReference = useRef();

  function handleClick() {
    countValue.current++;

    console.log(countValue.current);
  }

  useEffect(() => {
    const getDivRefrence = divReference.current;

    console.log(getDivRefrence);
  }, []);

  useEffect(() => {
    inputReference.current.focus();
  }, []);

  return (
    <div className="p-5 border rounded-md mt-5 w-full">
      <h1 className="text-3xl text-orange-400 font-bold mb-5">UseRef Hook</h1>
      <button
        className="p-2 bg-orange-400 rounded-md mt-5"
        onClick={handleClick}
      >
        Click me
      </button>

      <div ref={divReference} className="hello">
        Hello World
      </div>
      <input
        ref={inputReference}
        type="text"
        placeholder="Enter Some Points..."
      />
    </div>
  );
};

export default Hookuseref;
