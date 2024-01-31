import React, { useReducer } from "react";

const initialState = {
  count: 0,
  showCountFlag: true,
};

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "add":
      return {
        ...state,
        count: state.count + 1,
      };
    case "substract":
      return {
        ...state,
        count: state.count - 1,
      };
    case "reset":
      return {
        ...state,
        count: 0,
      };
    case "showcount":
      return {
        ...state,
        showCountFlag: !state.showCountFlag,
      };
    default:
      break;
  }
}

const Hookusereducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div className="p-5 border rounded-md mt-5 w-full">
      <h1 className="text-3xl text-orange-400 font-bold mb-5">
        Use Reducer Hook
      </h1>
      {state.showCountFlag ? <h2>Count is {state.count}</h2> : null}
      <div className="flex gap-5 justify-center">
        <button
          onClick={() => dispatch({ type: "add" })}
          className="p-3 bg-yellow-400 rounded-md  hover:bg-yellow-500"
        >
          Increacse Count
        </button>
        <button
          onClick={() => dispatch({ type: "substract" })}
          className="p-3 bg-yellow-400 rounded-md hover:bg-yellow-500"
        >
          Decrease Count
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="p-3 bg-yellow-400 rounded-md  hover:bg-yellow-500"
        >
          Reset Count
        </button>
        <button
          onClick={() => dispatch({ type: "showcount" })}
          className="p-3 bg-yellow-400 rounded-md  hover:bg-yellow-500"
        >
          Show Count
        </button>
      </div>
    </div>
  );
};

export default Hookusereducer;
