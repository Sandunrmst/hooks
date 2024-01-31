import React, { useContext } from "react";
import { GlobalContext } from "../context";

const Componentone = () => {
  const { setTheme, theme } = useContext(GlobalContext);

  console.log(theme);
  return (
    <div>
      <h1 className="text-3xl text-orange-400 font-bold mb-5">Use Context</h1>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-2 bg-orange-400 rounded-md mt-2 font-semibold text-yellow-50 hover:bg-orange-500 duration-200"
      >
        Change Theme
      </button>
    </div>
  );
};

export default Componentone;
