const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      localStorage.setItem(
        "transactions",
        JSON.stringify({
          transactions: [action.payload, ...state.transactions],
        })
      );
      return { transactions: [action.payload, ...state.transactions] };
    default:
      return state;
  }
};
export default reducer;
