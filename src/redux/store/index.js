import { createStore } from "redux";
import toDoReducer from "../reducers/toDo.reducers";

const store = createStore(toDoReducer);

export default store;