import React from 'react';
import SearchBar from './SearchBar';
import UserList from './UserList';
import '../stylesheets/UsersList.css';
import '../stylesheets/common.css';

const UsersListPage = () => {
    return(
      <div>
        <SearchBar />
        <br/>
        <br/>
        <UserList />
      </div>
    );
}

export default UsersListPage;
