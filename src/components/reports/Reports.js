import React, { Component } from 'react'

import './Reports.css';

export class Reports extends Component {
    render() {
        return (
            <div className="reports-model">
                <div className="reports-row pd-16">
                    <div className="reports-header">Reports</div>
                </div>
                <div className="reports-row pd-16">
                    <div className="reports-week">Week one</div>
                </div>
                <div className="reports-row">
                    <div className="reports-table">
                        <div className="reports-table-row pd-16">
                            <div className="reports-table-col hd-item">Names</div>
                            <div className="reports-table-col hd-item">Quality</div>
                            <div className="reports-table-col hd-item">Quantity</div>
                            <div className="reports-table-col hd-item">Initiative</div>
                            <div className="reports-table-col hd-item">Communication</div>
                            <div className="reports-table-col hd-item">Professionalism</div>
                            <div className="reports-table-col hd-item">Integration</div>
                            <div className="reports-table-col hd-item">Average</div>
                        </div>
                        <div className="reports-table-row row-items pd-16">
                            <div className="reports-table-col row-item">Dominique Nsengimana</div>
                            <div className="reports-table-col row-item">1</div>
                            <div className="reports-table-col row-item">2</div>
                            <div className="reports-table-col row-item">1</div>
                            <div className="reports-table-col row-item">2</div>
                            <div className="reports-table-col row-item">2</div>
                            <div className="reports-table-col row-item">2</div>
                            <div className="reports-table-col row-item">0.8</div>
                        </div>
                        <div className="reports-table-row row-items pd-16">
                            <div className="reports-table-col row-item">Dominique Nsengimana</div>
                            <div className="reports-table-col row-item">1</div>
                            <div className="reports-table-col row-item">2</div>
                            <div className="reports-table-col row-item">1</div>
                            <div className="reports-table-col row-item">2</div>
                            <div className="reports-table-col row-item">2</div>
                            <div className="reports-table-col row-item">2</div>
                            <div className="reports-table-col row-item">0.8</div>
                        </div>
                        <div className="reports-table-row row-items pd-16">
                            <div className="reports-table-col row-item">Dominique Nsengimana</div>
                            <div className="reports-table-col row-item">1</div>
                            <div className="reports-table-col row-item">2</div>
                            <div className="reports-table-col row-item">1</div>
                            <div className="reports-table-col row-item">2</div>
                            <div className="reports-table-col row-item">2</div>
                            <div className="reports-table-col row-item">2</div>
                            <div className="reports-table-col row-item">0.8</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reports
