import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

function reducer(state, action) {}

const Hookusereducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div className="p-5 border rounded-md mt-5 w-full">
      <h1 className="text-3xl text-orange-400 font-bold mb-5">
        Use Reducer Hook
      </h1>
      <div className="flex gap-5 justify-center">
        <button className="p-3 bg-yellow-400 rounded-md  hover:bg-yellow-500">
          Increacse Count
        </button>
        <button className="p-3 bg-yellow-400 rounded-md hover:bg-yellow-500">
          Decrease Count
        </button>
        <button className="p-3 bg-yellow-400 rounded-md  hover:bg-yellow-500">
          Reset Count
        </button>
        <button className="p-3 bg-yellow-400 rounded-md  hover:bg-yellow-500">
          Show Count
        </button>
      </div>
    </div>
  );
};

export default Hookusereducer;
