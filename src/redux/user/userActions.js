import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST,
  };
}

function fetchUserSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    playload: users,
  };
}

function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FEILURE,
    playload: error,
  };
}

export function fetchUsers() {
  return (dispatch) => {
    //dispatch({ type: FETCH_USERS_REQUEST });
    dispatch(detchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        //dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data })
        dispatch(fetchUserSuccess(res.data));
      })
      .catch((err) =>
        //dispatch({ type: FETCH_USERS_FAILURE, playload: err.response.data.message,}),
        dispatch(fetchUsersFailure(err.message)),
      );
  };
}

//export const fetchUsers = () => () => {};

// think => past tense (thought) => delay (middleware)
