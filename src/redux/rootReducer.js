import { combineReducers } from "redux";
import milkReducer from "./milk/milkReducer";
import cakeReducer from "./cake/cakeReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  milk: milkReducer,
});

export default rootReducer;
