const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          timestamp: action.timestamp
        }
      ];
    case 'REMOVE_ITEM':
      return state.filter((item, index) => index !== action.index);
    default:
      return state;
  }
}

//​ Can also use combineReducers in the future.
export default cart;
