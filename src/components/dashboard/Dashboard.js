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

    getAverage = (userID) => {
        let av = 0;
        
        data.forEach(item => {
            const userReport = item.reports.find(report => report.userId === userID);
            av += ((userReport.reviews.quality.rating + userReport.reviews.quantity.rating + userReport.reviews.initiative.rating + userReport.reviews.communication.rating + userReport.reviews.professionalism.rating + userReport.reviews.integration.rating) / 6);
        });
        return av / data.length;
    }

    render() {
        let average = 0;
        if (this.props.user.userId) {
            average = this.getAverage(this.props.user.userId);
        }
        return (
            <div className="menus">
                <SideMenu  user={this.props.user} onClick={this.props.onClick}/>
                <MainMenu average={average.toFixed(1)} onClick={this.openReportModal} user={this.props.user}/>
                <SearchBox user={this.props.user}/>
                <div style={{ display: this.state.isReportsComponentActive ? "block" : "none" }}>
                    <Reports closeModel={this.closeModel} data={data[this.state.week]} />
                </div>
            </div>
        );
    }
}

export default Dashboard;