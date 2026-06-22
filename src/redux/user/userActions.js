import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

export function fetchUsers() {
  return (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data }))
      .catch((err) =>
        dispatch({
          type: FETCH_USERS_FAILURE,
          playload: err.response.data.message,
        }),
      );
  };
}

//export const fetchUsers = () => () => {};



// think => past tense (thought) => delay (middleware)
