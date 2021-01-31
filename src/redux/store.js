import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const PreloadedState = JSON.parse(localStorage.getItem("redux")) || {};

const store = createStore(
  reducer,
  PreloadedState,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

store.subscribe(() => {
  localStorage.setItem("redux", JSON.stringify(store.getState()));
});

export default store;
