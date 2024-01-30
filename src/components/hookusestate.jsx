import { useState } from "react";

const Hookusestate = () => {
  const [togle, setTogle] = useState(false);

  const toglehandler = () => {
    setTogle(!togle);
  };

  console.log(togle);

  return (
    <>
      <div className="p-5 border rounded-md">
        <h1 className="text-3xl text-orange-400 font-bold ">UseState Hook</h1>
        {togle ? (
          <h1 className="text-3xl mt-4 ">It's True</h1>
        ) : (
          <h1 className="text-3xl mt-4 ">It's False</h1>
        )}
        <button
          onClick={toglehandler}
          className="p-2 bg-orange-400 rounded-md mt-2 font-semibold text-yellow-50 hover:bg-orange-500 duration-200"
        >
          Change Text
        </button>
      </div>
    </>
  );
};

export default Hookusestate;
