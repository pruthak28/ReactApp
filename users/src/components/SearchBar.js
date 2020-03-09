import React from 'react';
import { connect } from 'react-redux';
import { fetchSearchedTerm, fetchSearchedUsers } from '../actions';

class SearchBar extends React.Component{
  onFormSubmit = (e) =>{
    e.preventDefault();
    this.props.fetchSearchedUsers(this.props.term);
  }

  setTerm = (event) => {
    this.props.fetchSearchedTerm(event.target.value);
  }

  render(){
    return(
      <div className="searchBox boxShadow">
        <form onSubmit={this.onFormSubmit}>
          <div className="field">
            <label> Search </label>
            <input
            type="text"
            value={this.props.term}
            onChange={this.setTerm}
            className="txtSearch"
            />
          </div>
        </form>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return { users: state.userNames, term: state.term}
}

export default connect(mapStateToProps,
{ fetchSearchedTerm,
  fetchSearchedUsers }
)(SearchBar);
