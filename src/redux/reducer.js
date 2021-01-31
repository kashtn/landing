import { ADD_CLIENT, AUTH, SET_POSTS } from "./actionTypes";

const initialState = {
  auth: false,
  clientsToCall: [],
  posts: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        auth: action.payload,
      };
    case ADD_CLIENT:
      return {
        ...state,
        clientsToCall: [...state.clientsToCall, action.payload],
      };
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
