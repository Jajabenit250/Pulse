import React from 'react';
import SideMenu from './SideMenu';
import MainMenu from './MainMenu';
import SearchBox from './SearchBox';

function Dashboard() {

  const openReportModal = (index) => {
    console.log('model opened', index);
    
  } 
  return (
    <div className="menus">
      <SideMenu />
      <MainMenu onClick={openReportModal}/>
      <SearchBox />
    </div>
  );
}

export default Dashboard;