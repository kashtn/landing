import { ADD_CLIENT, AUTH, SET_POSTS } from "./actionTypes.js";
import axios from "axios";

export function setAuth(boolean) {
  return {
    type: AUTH,
    payload: boolean,
  };
}
export function addClient(client) {
  return {
    type: ADD_CLIENT,
    payload: client,
  };
}
export function getPosts() {
  return async function (dispatch) {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    dispatch(setPosts(result.data.filter((post) => post.id < 5)));
  };
}
export function setPosts(posts) {
  return {
    type: SET_POSTS,
    payload: posts,
  };
}
