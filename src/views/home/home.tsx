import { Outlet } from 'react-router-dom';
import NavBar from '../../components/nav-bar/nav-bar';
import './home.less';

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Home;
