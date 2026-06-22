import React from "react";
import { useDispatch, useSelector } from "react-redux";

function MilkContainer() {
  const milk = useSelector((state) => state.milk);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>MILK Number : {milk.numOfMilks}</h2>
      <button onClick={() => dispatch(bytMilk())}>Buy Milk</button>
    </div>
  );
}

export default MilkContainer;
