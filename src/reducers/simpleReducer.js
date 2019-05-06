export default (state = { array: [] }, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      state.array.push(1);
      return {
        array: state.array
      };
    default:
      return state;
  }
};
