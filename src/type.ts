//=============Redux============

import { AUTH, ADD_CLIENT, SET_POSTS } from "./redux/actionTypes";

export type SetAuthAction = {
  type: typeof AUTH;
  payload: boolean;
};
export type ClientToCallType = {
  name: string;
  lastName: string;
  tel: string;
};
export type AddClientAction = {
  type: typeof ADD_CLIENT;
  payload: ClientToCallType;
};
export type PostType = {
  [key: string]: any;
};
export type SetPostsAction = {
  type: typeof SET_POSTS;
  payload: PostType[];
};

export type ActionTypes = AddClientAction | SetPostsAction | SetAuthAction;

export type StateType = {
  auth: boolean;
  clientsToCall: ClientToCallType[];
  posts: PostType[];
};

//==========App==========

export type PropsType = {
  children?: never;
};
