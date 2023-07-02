import { Outlet } from 'react-router-dom';
import NavBar from '../../components/nav-bar/nav-bar';
import './home.less';
import React from 'react';

const Home = React.memo(() => {
  return (
    <div className="home">
      <NavBar />
      <Outlet />
    </div>
  );
});

export default Home;
