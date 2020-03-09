import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsersList } from '../actions';
import User from './User';

class UserList extends Component{
  componentDidMount() {
    this.props.fetchUsersList();
  }

  shouldComponentUpdate(nextProps) {
    console.log((this.props.users !== nextProps.users) ? true : false);
      return (this.props.users !== nextProps.users) ? true : false;
  }

  renderUsersList(){
      if(this.props.users){
        return this.props.users.map((user) => {
          return (
                <User key={user.id} login={user.login}/>
          );
        });
      }

  }

  render(){
    if(!this.props.users){
      return null;
    }

    return(
      <div className="" >
        {this.renderUsersList()}
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    users: state.users, userNames: state.userNames
  };
};

export default connect(mapStateToProps, {
  fetchUsersList
})(UserList);
