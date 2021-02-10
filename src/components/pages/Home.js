import React, { Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';

const Home = () => (
  <Fragment>
    <h1 className="text-center large">Github Profile Finder</h1>
    <p className="text-center">Get the latest information about the user you are looking for
    <span> </span>
    <i class="fas fa-check"></i>
    </p>
    
    <Search />
    <Users />
  </Fragment>
);

export default Home;
