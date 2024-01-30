import { useState } from "react";

const Hookusestate = () => {
  const [togle, setTogle] = useState(false);

  const initialState = {
    name: "",
    city: "",
  };

  const toglehandler = () => {
    setTogle(!togle);
  };

  console.log(togle);

  //Set Form Data
  const [formData, setFormData] = useState(initialState);

  function handleNameChange(event) {
    setFormData({
      ...formData,
      name: event.target.value,
    });
  }

  function handleCitySelect(event) {
    setFormData({
      ...formData,
      city: event.target.value,
    });
  }

  console.log(formData);

  return (
    <>
      <h1 className="text-3xl text-orange-400 font-bold mb-5">UseState Hook</h1>
      <div className="p-5 border rounded-md">
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

      <div className="p-5 border rounded-md mt-5 w-full">
        <h1 className="text-3xl mt-4 font-semibold ">Selection</h1>
        <div className="flex justify-center items-center gap-2 mt-5">
          <div>
            <input
              onChange={handleNameChange}
              className="p-2  rounded-md border-orange-100 border-l-4 border-2"
              type="text"
              name="name"
              placeholder="Enter Name"
            />
          </div>
          <div>
            <select
              onChange={handleCitySelect}
              className="p-2 rounded-md bg-orange-100 cursor-pointer"
              name="city"
            >
              <option value={""} id="">
                Select City
              </option>
              <option value={"colombo"} id="colombo">
                Colombo
              </option>
              <option value={"gampaha"} id="gampaha">
                Gampaha
              </option>
              <option value={"negombo"} id="negombo">
                Negombo
              </option>
              <option value={"kurunegala"} id="kurunegala">
                Kurunegala
              </option>
              <option value={"kuliyapitiya"} id="kuliyapitiya">
                Kuliyapitiya
              </option>
            </select>
          </div>
        </div>
        <div>
          <h2>Your Name is : {formData.name}</h2>
          <p>Your City : {formData.city}</p>
        </div>
      </div>
    </>
  );
};

export default Hookusestate;
