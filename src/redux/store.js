import { applyMiddleware } from "redux";
import cakeReducer from "./cake/cakeReducer";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
