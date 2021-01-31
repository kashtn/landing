import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const PreloadedState = localStorage.getItem("redux") || "{}";

const store = createStore(
  reducer,
  JSON.parse(PreloadedState),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

store.subscribe(() => {
  localStorage.setItem("redux", JSON.stringify(store.getState()));
});

export type AppState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
