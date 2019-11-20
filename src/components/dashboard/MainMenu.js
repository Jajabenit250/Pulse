import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import './styles.css';

class MainMenu extends Component {
   state = {
      redirectUser: false
   }

   // Function to change this state accordingly
   changeState = () => {
      const {...data} = this.state;
      return data.redirect = !data.redirect;
   }

   //Function to check if there are props
   checkIfIsProps = () => { 
      if (!this.props.user.type) {return this.changeState(); }
      return false;
   }

   render() {
      
      // Function to loop through the twelve circles

      const loopThroughPeriod = (periods) => {
         return periods.map((period, index)=>{
            return <div style={{cursor: "pointer"}} className={(period === 1 || period === 2) ? "completed" : "not_completed"} onClick={() => this.props.onClick(index)} key={index}>{period}</div>
         })
      }  
      if(this.checkIfIsProps()) {
         return <Redirect to='/account' />;
      }
      
      return (
         
         // this is where the main menu component is implemented
         
            <div className="main-menu">
               <h1>Simulation</h1>
               <span>30.11.2019 - 2.01.2020</span>
               <p className="badge">{this.props.user.type}</p>
               <div className="line"></div>
               <div className="circle">{loopThroughPeriod([1,2,3,4,5,6,7,8,9,10,11,12])}</div>
               <div className={this.props.user.type === 'Software Engineer' ? "hide-main-menu__floating-button" : "main-menu__floating-button"}>+</div>
               <div className="average" style={{display: this.props.user.type === 'Software Engineer' ? "block" : "none", backgroundColor: this.props.average <= 1 ? "#DC143C" : "green"}}>Total Average: {this.props.average}</div>
            </div>
      );
   }
   
}

export default MainMenu;