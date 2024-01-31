import React from "react";

const Componenttwo = () => {
  return (
    <div>
      <h1 className="text-3xl text-orange-400 font-bold mb-5">
        Login Register
      </h1>
      <div className="flex justify-center gap-5 flex-1">
        <button className="p-2 bg-orange-400 rounded-md mt-2 font-semibold text-yellow-50 hover:bg-orange-500 duration-200">
          Login
        </button>
        <button className="p-2 bg-orange-400 rounded-md mt-2 font-semibold text-yellow-50 hover:bg-orange-500 duration-200">
          Register
        </button>
      </div>
    </div>
  );
};

export default Componenttwo;
