const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_NUMBER":
      return state + action.payload;
    case "DECREASE_NUMBER":
      return state - 1;
    default:
      return state;
  }
};

export default changeTheNumber;
