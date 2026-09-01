import React, { useRef, useState } from "react";
import DisplayValue from "./DisplayValue";

const HandlePreviousValue = () => {
  const [count, setCount] = useState<number>(0);
  const prevCountRef = useRef<number>(0);

  const handleCount = () => {
    prevCountRef.current = count;
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <DisplayValue count={count} prevCountRef={prevCountRef.current} />
      <button onClick={handleCount}>カウントアップ</button>
    </div>
  );
};

export default HandlePreviousValue;
