import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const UserItem = ({user}) => {
  
  return (
    <div className='card-us-item text-center'>
      <img
        src={user.avatar_url}
        alt=''
        className='round-img'
        style={{ width: '150px' }}
      />
      <h3>{user.login}</h3>
     
      <div>
        <Link to={`/user/${user.login}`} className='btn btn-primary btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
