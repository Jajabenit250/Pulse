import React, { Component } from 'react';
import SideMenu from './SideMenu';
import MainMenu from './MainMenu';
import SearchBox from './SearchBox';

export class Dashboard extends Component {
    render() {
        return (
            <div className="menus">
                <SideMenu />
                <MainMenu />
                <SearchBox />
            </div>
        )
    }
}

export default Dashboard;
