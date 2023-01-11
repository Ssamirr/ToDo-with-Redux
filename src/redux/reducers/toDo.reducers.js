import { ADD, DELETE, UPDATE } from "../actions/toDo.actions";

// const initialState = [{}];
let forId = 0;

const toDoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            forId++;
            return [...state, { "id": forId, "text": action.payload }]
        case DELETE:
            return state.filter((q) => q.id !== action.payload.id)
        case UPDATE:
            let updateItemIndex = state.findIndex(q => q.id === action.payload.id)
            state[updateItemIndex] = { "id": action.payload.id, "text": action.payload.text };
            return [...state];
        default:
            return state;
    }
};

export default toDoReducer