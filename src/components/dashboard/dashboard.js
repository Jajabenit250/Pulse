import React, { Component } from 'react';
import SideMenu from './SideMenu';
import MainMenu from './MainMenu';
import SearchBox from './SearchBox';
import { Reports } from "../reports/Reports";
import { data } from "../../data/data";

export class dashboard extends Component {

  onclick = () => {

  }

  render() {
    return (
      <div className="menus">
        <SideMenu />
        <MainMenu onclick={this.onclick}/>
        <SearchBox />
        {/* <Reports data={data[0]} /> */}
      </div>
    );
  }
}

export default dashboard
