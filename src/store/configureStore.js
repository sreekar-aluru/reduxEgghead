import { createStore, applyMiddleware } from "redux";
// import promise from "redux-promise";
import { createLogger } from "redux-logger";
import todoApp from "../reducers";
import thunk from "redux-thunk";
// import { loadState, saveState } from "./localStorage";
// import throttle from "lodash/throttle";

const configureStore = () => {
  // const persistedState = loadState();
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger());
  }

  return createStore(todoApp, applyMiddleware(...middlewares));
  // store.subscribe(
  //   throttle(() => {
  //     saveState({
  //       todos: store.getState().todos
  //     });
  //   }, 1000)
  // );
  // return store;
};

export default configureStore;
