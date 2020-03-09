import React from 'react';
import { connect } from 'react-redux';
import { fetchFollowers } from '../actions';

class FollowersList extends React.Component{

  componentDidMount(){
    this.props.fetchFollowers(this.props.login);
  };

  renderFollowersList(){
    const {followers} = this.props;
    return followers.map((follower) => {
      return (
        <table key={follower.id} className="followerTile">
          <tbody>
            <tr>
              <td>
                <img src={follower.avatar_url} alt={follower.name} className="followerImg"/>
              </td>
              <td valign="middle">
                <p className="followerName">{follower.name ? follower.name : "No Name"}</p>
              </td>
            </tr>
          </tbody>
        </table>
      );
    });
  }

  render(){
    if(!this.props.followers) return null;
    return (
      <div className="followersList boxShadow">
        <div className="lblFollower">&nbsp;&nbsp;Followers ({this.props.followers.length})</div>
        {this.renderFollowersList()}
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return { followers: state.followers}
};

export default connect(mapStateToProps, {
  fetchFollowers
})(FollowersList);
