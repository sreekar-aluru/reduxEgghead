import { v4 } from "uuid";
import * as api from "../api";
import { getIsFetching } from "../reducers";

export const fetchTodos = filter => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }
  dispatch({
    type: "FETCH_TODOS_REQUEST",
    filter
  });
  return api.fetchTodos(filter).then(
    response => {
      dispatch({
        type: "FETCH_TODOS_SUCCESS",
        filter,
        response
      });
    },
    error => {
      dispatch({
        type: "FETCH_TODOS_FAILURE",
        filter,
        message: error.message || "Something went wrong"
      });
    }
  );
};

const addTodo = text => ({
  type: "ADD_TODO",
  id: v4(),
  text
});

// const setVisibilityFilter = filter => ({
//   type: "SET_VISIBILITY_FILTER",
//   filter
// });

const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export { addTodo, toggleTodo };
