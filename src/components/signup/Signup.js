import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./signup.css";
class Signup extends Component {

  render() {
    return (
      <div className="signup-box">
       <div className="signup-logo-container">
<div className="signup-logo">
           <svg
            width="125"
            height="78"
            viewBox="0 0 125 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36.0777 0C-8.05526 34.8079 -24.4853 69.2645 64.7602 73.9093C87.1963 75.077 107.201 76.1169 125 77.0412V0H36.0777Z"
              fill="#0094FF"
            />
          </svg>
</div>
       </div>
       <div className="signup-form-container">
<div className="signup-header">

<h4>Sign up</h4>

</div>
<div className="signup-form">
<form>
<label className="label-text">Full Name</label>
            <input id="input-border"  className="form-control form-control-lg " type="text" name="fname"/>
            
            <label className="label-text">Email</label>
            <input id="input-border" className="form-control form-control-lg " type="email" name="email"/>

            <label className="label-text">Password</label>
            <input id="input-border" className="form-control form-control-lg " type="password" name="password"/>

            <Link to="/"><button className="signup-button">Sign up</button></Link>
            <div onClick={()=>{this.props.changeComponent("Signin")}}>
              <a href="#"><Text text="Go to sign in" /></a>
            </div>
</form>
</div>
       </div>
      </div>
    );
  }
}

class Text extends Component {
  state = {};
  render() {
    return (
      <div>
        <h5 className="input-text">{this.props.text}</h5>
      </div>
    );
  }
}

export default Signup;
