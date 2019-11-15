import React, {Component} from 'react';
import './styles.css';

class MainMenu extends Component {

   render() {
      // Function to loop through the twelve circles
<<<<<<< HEAD
=======

      const loopThroughPeriod = (periods) => {
         return periods.map((period, index)=>{
            return <div className={(period === 1 || period === 2) ? "completed" : "not_completed"} onClick={() => this.props.onClick(index)} key={index}>{period}</div>
         })
      }
>>>>>>> ch(add click event): add click event on the period element
      return (

         // this is where the main menu component is implemented
         
            <div className="main-menu">
               <h1>Simulation</h1>
               <span>30.11.2019 - 2.01.2020</span>
               <p className="badge">Software Engineer</p>
               {/* <div className="line"></div> */}
               <div class="progress" style={{
                  width: (16 + (80 * 2)),
                  display: "grid",
                  gridTemplateColumns: "repeat(4, auto)",
                  gridTemplateRows: 16
               }}>
               <div class="circle-m"></div>
                  {
                  [{name: "Veda"},{},{}].map((period, index)=>{
                     return <div class="line-circle">
                     <div class="line-m"></div>
                     <div className={(index+1 === 1 || index+1 === 2) ? "done" : ""} style={{
                        cursor:"pointer",
                        width: 14,
                        height: 14,
                        borderRadius: 50
                     }} onClick={this.props.onclick}>
                     <div style={{cursor:"pointer"}} >{index+1}</div>
                     </div>
                 </div>;
                  })
               }</div>
            </div>
      )
   }
   
}

export default MainMenu