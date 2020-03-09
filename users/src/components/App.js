import React from 'react';
import { Router, Route } from 'react-router-dom';
import UsersListPage from './UsersListPage';
import UserPage from './UserPage';
import history from '../history';

class App extends React.Component{
  render(){
    return(
      <div>
        <Router history={history}>
          <div>
            <Route path="/" exact component={UsersListPage} />
            <Route path="/users/:loginId" component={UserPage} />
          </div>
        </Router>
      </div>
    );
  };
}

export default App;
