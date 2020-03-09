import React, { Component } from 'react';
import User from './User';
import FollowersList from './FollowersList';
import RepositoryList from './RepositoryList';
import '../stylesheets/UserPage.css';
import '../stylesheets/common.css';

class UserPage extends Component {

  render(){
    const { loginId } = this.props.match.params;
      return(
        <div>
          <table className="leftContainer">
            <tbody>
              <tr>
                <td>
                  <User login={loginId}/>
                </td>
              </tr>
              <tr>
                <td>
                  <br/>
                  <br/>
                  <FollowersList login={loginId}/>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="repoListContainer">
              <RepositoryList login={loginId}/>
          </div>
        </div>
      );
  };
}

export default UserPage;
