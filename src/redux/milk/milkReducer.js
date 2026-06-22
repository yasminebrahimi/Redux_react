import { BUY_MILK } from "./milkTypes";

const initialState = {
  numOfMilks: 10,
};

export default function cakeReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_CAKE: {
      return {
        ...state,
        numOfMilks: state.numOfMilks - action.paylaod,
      };
    }
    default:
      return state;
  }
}
