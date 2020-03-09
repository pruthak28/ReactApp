export default (state=[], action) => {
  switch(action.type){
    case "FETCH_USERS":
      return action.payload;
    case "SEARCH_RESULT":
      return [...state, action.payload];
    case "RESET_USERS":
      return [];
    default:
      return state;
  }
};
