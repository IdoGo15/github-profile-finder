import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className='card flex'>
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
      <p style={{marginLeft: "20px", fontSize: "14px"}}>{repo.description}</p>
      {repo.language && <p>Main Language: {repo.language}</p>}
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
