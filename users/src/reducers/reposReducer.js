export default (state=[], action) => {
  switch(action.type){
    case "FETCH_REPOS":
      return action.payload;
    default:
      return state;
  }
};
