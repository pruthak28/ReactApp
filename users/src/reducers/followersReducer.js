export default (state=[], action) => {
  switch(action.type){
    case "FETCH_FOLLOWERS":
      return [...state, action.payload ];
    default:
      return state;
  }
};
