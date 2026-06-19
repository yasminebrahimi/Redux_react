import React from "react";
import { useDispatch, useSelector } from "react-redux";

function CakeContainer() {
  const [value, setValue] = useState(" ");
  //1. this hooks accepts a function as its parameter: selector function
  //2. useSelector hooks return whatever returns by selector function
  const state = useSelector((state) => state);
  //console.log(state);

  // returns a reference to the dispatch function in redux store
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Cake Number: {state.numOfCakes}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch({ type: "BUY_CAKE", payload: 1 })}>
        Buy Cake
      </button>
      {/* <button onClick={() => dispatch({ type: "BUY_CAKE", payload: 2 })}>
        Buy Two Cakes
      </button> */}
    </div>
  );
}

export default CakeContainer;

//1. how to dispatch action?
//2. how to access to redux store?

//without hooks (CC) => mapDispatchToProps => BAD PRACTICE

//instead useSelectore and useDispatch
