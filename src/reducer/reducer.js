import { createStore } from "redux";

const initialState = [];

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return action.payload;
    default:
      return state;
  }
};

const store = createStore(reducers);

export default store;
