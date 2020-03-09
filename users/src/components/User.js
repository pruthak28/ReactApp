import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import { Link } from 'react-router-dom';

class User extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.login);
  }

  render(){
    const { user } = this.props;
    if(!user){
        return null;
    }

    return (
      <div className="userItem boxShadow">
        <Link to={`/users/${user.login}`}  >
            <img src={user.avatar_url} alt={user.avatar_url} className="userAvatar" />
            <p className="userName">{user.name}</p>
            <p className="userLogin">{user.login}</p>
            <br/>
        </Link>
      </div>
    );

  };

};

const mapStateToProps = (state, ownProps) => {
  return {user: state.userNames.find((user) => user.login === ownProps.login)};
};

export default connect(mapStateToProps, { fetchUser })(User);
