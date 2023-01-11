import { ADD, UPDATE } from "./toDo.actions";
import { DELETE } from "./toDo.actions";

export const add = (text) => {
  return {
    type: ADD,
    payload: text,
  };
};

export const deleteItem = (text) => {
  return {
    type: DELETE,
    payload: text,
  };
};

export const update = (text) => {
  return {
    type: UPDATE,
    payload: text,
  };
};