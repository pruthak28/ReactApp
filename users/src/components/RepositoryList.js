import React from 'react';
import { connect } from 'react-redux';
import { fetchRepositories } from '../actions';

class RepositoryList extends React.Component{

  componentDidMount(){
    this.props.fetchRepositories(this.props.login);
  };

  renderRepoList(){
    return this.props.repos.map((repo) => {
      return (
        <div key={repo.id} className="repoLink">
          <a href={repo.html_url}
            target="_blank" rel="noopener noreferrer" >
            <h4>{repo.name}</h4>
            <p className="repoDesc">{repo.description}</p>
          </a>
        </div>

      );
    });
  };

  render(){
    return (
      <div className="repoList boxShadow">
        <div className="lblFollower">
          &nbsp;&nbsp;Repositories ({this.props.repos.length})
        </div>
        {this.renderRepoList()}
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return { repos: state.repos}
};

export default connect(mapStateToProps, {
  fetchRepositories
})(RepositoryList);
