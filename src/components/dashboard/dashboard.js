import React from 'react';
import SideMenu from './SideMenu';
import MainMenu from './MainMenu';
import SearchBox from './SearchBox';

function Dashboard() {
  return (
    <div className="menus">
      <SideMenu />
      <MainMenu />
      <SearchBox />
    </div>
  );
}

export default Dashboard;