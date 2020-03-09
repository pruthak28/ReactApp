import users from '../apis/users';
import _ from 'lodash';

export const fetchSearchedUsers= (term) => async (dispatch, getState) => {
  if(term !== ""){
    const response = await users.get("/users");
    dispatch({ type: "RESET_USER" });
    dispatch({ type: "RESET_USERS" });
    response.data.forEach(async (item) => {
      const resp = await users.get(`/users/${item.login}`);
      if(resp.data.name){
        if(resp.data.name.includes(term)){
            await dispatch({ type: "SEARCH_RESULT", payload: item });
            await dispatch({ type: "FETCH_USER", payload: resp.data });
        }
      }
    });

  }
  else{
    dispatch(fetchUsersList());
    dispatch({ type: "RESET_USER" });
    dispatch({ type: "RESET_USERS" });
    await dispatch(fetchUsersList());
  }

};

export const fetchSearchedTerm = (val) => (dispatch)  => {
  dispatch({ type: "FETCH_TERM", payload: val });
};

export const fetchUsersList = () => async (dispatch) => {
  const response = await users.get("/users");
  dispatch({ type: "FETCH_USERS", payload: response.data });

};

export const fetchUser = (login) => async (dispatch, getState) => {
const response = await users.get(`/users/${login}`);
  dispatch({ type: "FETCH_USER", payload: response.data });

};

export const fetchFollowers = (login) => async (dispatch, getState) => {
  const resp = await users.get(`/users/${login}/followers`);
  const loginIds = _.uniq(_.map(resp.data,"login"));
  loginIds.forEach(async (id, i) => {
    const resp = await users.get(`/users/${id}`);
    dispatch({ type: "FETCH_FOLLOWERS", payload: resp.data });
  });
};

export const fetchRepositories = (login) => async (dispatch) => {
  const response = await users.get(`/users/${login}/repos`);
  dispatch({ type: "FETCH_REPOS", payload: response.data });

};
