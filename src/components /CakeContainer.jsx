import React from "react";

function CakeContainer() {
  return (
    <div>
      <h2>Cake Number: 10</h2>
      <button>Buy Cake</button>
    </div>
  );
}

export default CakeContainer;

//1. how to dispatch action?
//2. how to access to redux store?

//without hooks (CC) => mapDispatchToProps => BAD PRACTICE

//instead useSelectore and useDispatch
