import React, { Component } from 'react';
import SideMenu from './SideMenu';
import MainMenu from './MainMenu';
import SearchBox from './SearchBox';
import { Reports } from "../reports/Reports";
import { data } from "../../data/data";

export class Dashboard extends Component {

    state = {
        isReportsComponentActive: false,
        week: 0
    }

    openReportModal = (index) => {
        if (data.length > index) {
            this.setState({ week: index });
            this.setState({ isReportsComponentActive: true });
        }
    }

    closeModel = () => {
        this.setState({ isReportsComponentActive: false });
    }

    render() {
        return (
            <div className="menus">
                <SideMenu />
                <MainMenu onClick={this.openReportModal} />
                <SearchBox />
                <div style={{ display: this.state.isReportsComponentActive ? "block" : "none" }}>
                    <Reports closeModel={this.closeModel} data={data[this.state.week]} />
                </div>
            </div>
        );
    }
}

export default Dashboard;