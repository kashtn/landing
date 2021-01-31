import { ADD_CLIENT, AUTH, SET_POSTS } from "./actionTypes";
import { AppDispatch } from "./store";
import axios from "axios";
import {
  PostType,
  ClientToCallType,
  SetPostsAction,
  AddClientAction,
  SetAuthAction,
} from "../type.js";

export function setAuth(boolean: boolean): SetAuthAction {
  return {
    type: AUTH,
    payload: boolean,
  };
}
export function addClient(client: ClientToCallType): AddClientAction {
  return {
    type: ADD_CLIENT,
    payload: client,
  };
}
export function getPosts() {
  return async function (dispatch: AppDispatch) {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    dispatch(setPosts(result.data.filter((post: PostType) => post.id < 5)));
  };
}
export function setPosts(posts: PostType[]): SetPostsAction {
  return {
    type: SET_POSTS,
    payload: posts,
  };
}
