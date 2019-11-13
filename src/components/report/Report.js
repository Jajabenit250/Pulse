import React, { Component } from 'react'

import './Report.css';

export class Report extends Component {
    render() {
        return (
            <div className="report-model">
                <div className="report-row pd-16">
                    <div className="report-header">Attributes</div>
                </div>
                <div className="report-row">
                    <div className="report-table">
                        <div className="report-table-row pd-l-16 row-items active">
                            <div className="report-table-col row-item">Quality</div>
                            <div className="report-table-col row-item">
                                <div className="item-border">2</div>
                            </div>
                            <div className="report-table-col row-item cl-brue align-r">Satisfied</div>
                        </div>
                        <div className="report-table-row pd-l-16 row-items">
                            <div className="report-table-col row-item">Quantity</div>
                            <div className="report-table-col row-item">
                                <div className="item-border">2</div>
                            </div>
                            <div className="report-table-col row-item cl-brue align-r">Satisfied</div>
                        </div>
                        <div className="report-table-row pd-l-16 row-items">
                            <div className="report-table-col row-item">Initiative</div>
                            <div className="report-table-col row-item">
                                <div className="item-border">2</div>
                            </div>
                            <div className="report-table-col row-item cl-brue align-r">Satisfied</div>
                        </div>
                        <div className="report-table-row pd-l-16 row-items">
                            <div className="report-table-col row-item">Communication</div>
                            <div className="report-table-col row-item">
                                <div className="item-border">2</div>
                            </div>
                            <div className="report-table-col row-item cl-brue align-r">Satisfied</div>
                        </div>
                        <div className="report-table-row pd-l-16 row-items">
                            <div className="report-table-col row-item">Professionalism</div>
                            <div className="report-table-col row-item">
                                <div className="item-border">2</div>
                            </div>
                            <div className="report-table-col row-item cl-brue align-r">Satisfied</div>
                        </div>
                        <div className="report-table-row pd-l-16 row-items">
                            <div className="report-table-col row-item">Quality</div>
                            <div className="report-table-col row-item">
                                <div className="item-border">2</div>
                            </div>
                            <div className="report-table-col row-item cl-brue align-r">Satisfied</div>
                        </div>
                        <div className="report-table-review">
                        Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Report
