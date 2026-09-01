import React from "react";

interface DisplayValueProps {
  count: number;
  prevCountRef: number;
}

const DisplayValue = ({ count, prevCountRef }: DisplayValueProps) => {
  return (
    <div>
      <p className="text-blue-300">現在のカウント: {count}</p>
      <p className="text-red-300">前回のカウント: {prevCountRef}</p>
    </div>
  );
};

export default DisplayValue;
