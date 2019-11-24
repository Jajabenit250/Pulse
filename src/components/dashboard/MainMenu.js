import React, {Component} from 'react';
import './styles.css';
import { weeks } from '../../data/data'
import "./styles.css";

class MainMenu extends Component {

  render() {

    const loopThroughPeriod = periods => {
      return periods.map((period, index) => {
        return (<div style={{cursor: "pointer"}} className={period.competed ? "completed" : "not_completed"} onClick={() => this.props.onClick(index)} key={index}>{1 + index}</div>);
      });
    };

    return (
      // this is where the main menu component is implemented

      <div className="main-menu">
        <h1>{this.props.title}</h1>
        <span>30.11.2019 - 2.01.2020</span>
        <p className="badge">{this.props.user.type}</p>
        <div className="line"></div>
        <div className="circle">
          {loopThroughPeriod(weeks)}
        </div>
        <div
          className="average"
          style={{
            display:
              this.props.user.type === "Software Engineer" ? "block" : "none",
            backgroundColor: this.props.average <= 1 ? "#DC143C" : "green"
          }}
        >
          Total Average: {this.props.average}
        </div>
      </div>
    );
  }
}

export default MainMenu;
