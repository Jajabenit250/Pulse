import React from 'react';
import SideMenu from './components/dashboard/SideMenu';
import MainMenu from './components/dashboard/MainMenu';
import SearchBox from './components/dashboard/SearchBox';

function App() {
  return (
    <div className="menus">
      <SideMenu />
      <MainMenu />
      <SearchBox />
    </div>

  );
}

export default App;
