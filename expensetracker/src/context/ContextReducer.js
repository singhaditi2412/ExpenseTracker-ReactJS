const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      let newState = { ...state };
      if (action.payload?.price >= 0) {
        newState.income += action.payload?.price;
      } else {
        newState.expense += action.payload?.price;
      }
      newState.transactions = [action.payload, ...state.transactions];
      localStorage.setItem("expenseData", JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};
export default reducer;
