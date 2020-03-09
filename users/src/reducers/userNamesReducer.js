export default (state=[], action) => {
  switch(action.type){
    case "FETCH_USER":
      return [...state, action.payload ];
    case "RESET_USER":
      return [];
    default:
      return state;
  }
};
