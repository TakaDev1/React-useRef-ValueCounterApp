import React from "react";

interface DisplayValueProps {
  count: number;
  prevCountRef: number;
}

const DisplayValue = ({ count, prevCountRef }: DisplayValueProps) => {
  return (
    <div>
      <p>現在のカウント: {count}</p>
      <p>前回のカウント: {prevCountRef}</p>
    </div>
  );
};

export default DisplayValue;
