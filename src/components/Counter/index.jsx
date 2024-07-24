import React, { useState } from "react";
import { Button } from "components";
const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="flex items-center">
      <div className="flex items-center border rounded-lg overflow-hidden">
        <Button
          className="!bg-white-A700 text-gray-700 text-[24px] font-bold py-2 px-4 border-r"
          onClick={decrement}
        >
          -
        </Button>
        <span className="block text-gray-700 font-bold text-[18px] text-center !w-[100px]">
          {count}
        </span>
        <Button
          className="!bg-white-A700 text-gray-700 text-[24px] font-bold py-2 px-4 border-l"
          onClick={increment}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default Counter;
