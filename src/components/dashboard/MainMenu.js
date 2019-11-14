import React, {Component} from 'react';
import './styles.css';

class MainMenu extends Component {

   render() {
      // Function to loop through the twelve circles

      const loopThroughPeriod = (periods) => {
         return periods.map((period)=>{
            return <div className={(period === 1 || period === 2) ? "completed" : "not_completed"}>{period}</div>
         })
      }
      return (

         // this is where the main menu component is implemented
         
            <div className="main-menu">
               <h1>Simulation</h1>
               <span>30.11.2019 - 2.01.2020</span>
               <p className="badge">Software Engineer</p>
               <div className="line"></div>
               <div className="circle">{loopThroughPeriod([1,2,3,4,5,6,7,8,9,10,11,12])}</div>
            </div>
      )
   }
   
}

export default MainMenu