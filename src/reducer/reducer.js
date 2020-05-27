const initialState = [];

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return action.payload;
    default:
      return state;
  }
};

export default reducers;
