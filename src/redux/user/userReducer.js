import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export default function userReducer(state, action) {
  switch (acyion.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.playload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.playload,
      };
    default:
      return state;
  }
}

// fetch user is an Async action (side effect) => redux-thunk
// 1. REQUEST :
// 2. SUCCESS :
// 3. FAILURE :
