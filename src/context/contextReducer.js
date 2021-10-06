const contextReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTIONS":
      const transaction = state.filter((item) => item.id !== action.payload);
      return transaction;
    case "ADD_TRANSATIONS":
      const addTransaction = [action.payload, ...state];
      return addTransaction;
    default:
      return state;
  }
};

export default contextReducer;
