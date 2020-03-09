import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import userNamesReducer from './userNamesReducer';
import reposReducer from './reposReducer';
import followersReducer from './followersReducer';
import termReducer from './termReducer';

export default combineReducers({
  users: usersReducer,
  userNames: userNamesReducer,
  repos: reposReducer,
  followers: followersReducer,
  term: termReducer
});
