import React, { useEffect, useState } from "react";

const Hookuseeffect = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    console.log("Run oly onces");
  }, []);

  useEffect(() => {
    if (count === 4) {
      setShowText(true);
    }
  }, [count]);

  //Fetch Data
  async function fetchAllProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();

      if (result && result.products) setProductList(result.products);
      console.log("Result ", result);
    } catch (error) {
      console.log(error);
    }
  }
  //Default page load
  //   useEffect(() => {
  //     fetchAllProducts();
  //   }, []);

  useEffect(() => {
    if (count === 10) {
      fetchAllProducts();
    }
  }, [count]);

  console.log(productList);

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
        Increment Count
      </button>

      {/* <ul>
        {productList && productList.length > 0
          ? productList.map((item) => <li key={item.id}>{item.title}</li>)
          : null}
      </ul> */}

      <ul>
        {Array.isArray(productList) ? (
          productList.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })
        ) : (
          <p>Not an Array</p>
        )}
      </ul>
    </div>
  );
};

export default Hookuseeffect;
