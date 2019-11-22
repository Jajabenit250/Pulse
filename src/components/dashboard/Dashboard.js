import React, { Component } from 'react';
import SideMenu from './SideMenu';
import MainMenu from './MainMenu';
import SearchBox from './SearchBox';
import { Reports } from "../reports/Reports";
import { Report } from "../report/Report";
import { weeks } from "../../data/data";

export class Dashboard extends Component {

    constructor(){
        super();
        this.userData = {};
    }

    state = {
        isReportsComponentActive: false,
        isReportComponentActive: false,
        week: 0
    }

    viewEngineer = (item) => {
        this.userData = item;
        this.setState({ isReportComponentActive: true });
    }

    openReportModal = (index) => {
        if (this.props.user.type === 'Software Engineer') {
            if (weeks[index].competed) {
                this.setState({ week: index });
                this.setState({ isReportComponentActive: true });
            }
        }else{
            if (weeks.length > index) {
                this.setState({ week: index });
                this.setState({ isReportsComponentActive: true });
            }
        }
    }

    closeModel = () => {
        this.setState({ isReportsComponentActive: false });
    }

    closeModelR = () => {
        this.setState({ isReportComponentActive: false });
    }

    getAverage = (userID) => {
        let av = 0;
        weeks.forEach(item => {
            const userReport = item.reports.find(report => report.userId === userID);
            av += ((userReport.reviews.quality.rating + userReport.reviews.quantity.rating + userReport.reviews.initiative.rating + userReport.reviews.communication.rating + userReport.reviews.professionalism.rating + userReport.reviews.integration.rating) / 6);
        });
        return av / weeks.length;
    }

    render() {
        let average = 0;

        if (this.props.user.userId) {
            average = this.getAverage(this.props.user.userId);
        }

        if (this.props.user.userId && this.props.user.type === 'Software Engineer') {
            this.userData = weeks[this.state.week].reports.find(week => week.userId === this.props.user.userId);
        }

        return (
            <div className="menus">
                <SideMenu  user={this.props.user} onClick={this.props.onClick}/>
                <MainMenu average={average.toFixed(1)} onClick={this.openReportModal} user={this.props.user}/>
                <SearchBox user={this.props.user}/>
                <div style={{ display: this.state.isReportsComponentActive ? "block" : "none" }}>
                    <Reports viewEngineer={this.viewEngineer} closeModel={this.closeModel} data={weeks[this.state.week]} />
                </div>
                <div style={{ display: this.state.isReportComponentActive ? "block" : "none" }}>
                    <Report closeModel={this.closeModelR} data={this.userData} />
                </div>
            </div>
        );
    }
}

export default Dashboard;