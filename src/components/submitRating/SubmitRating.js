import React, { Component } from 'react';
import './submitRating.css';

class SubmitRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
          quality: '',
          quantity: '',
          initiative: '',
          communication: '',
          professionalism: '',
          integration: '',
        };
      }
      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
      render() {
        return (
          <form className= 'main'>
          <br />
          <h1>Attributes</h1>
          <br />
        <div className="rowBox">
            <div className="columnBox" >
              Quality
            </div>
            <div className="columnBox" >
              <select>
                <option value="Rate">Rate</option>
                <option value="-1">-1</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="columnBox" >
                    <input
                  type='text'
                  value='Feedback'
                  name='quality'
                  size= '20'
                  onChange={this.myChangeHandler}
                />
            </div>
        </div>
        <div className="rowBox">
            <div className="columnBox" >
              Quantity
            </div>
            <div className="columnBox" >
              <select>
                <option value="Rate">Rate</option>
                <option value="-1">-1</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="columnBox" >
                    <input
                  type='text'
                  value='Feedback'
                  name='quantity'
                  size= '20'
                  onChange={this.myChangeHandler}
                />
            </div>
        </div>
        <div className="rowBox">
            <div className="columnBox" >
              Initiative
            </div>
            <div className="columnBox" >
              <select>
                <option value="Rate">Rate</option>
                <option value="-1">-1</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="columnBox" >
                    <input
                  type='text'
                  value='Feedback'
                  name='initiative'
                  size= '20'
                  onChange={this.myChangeHandler}
                />
            </div>
        </div>
        <div className="rowBox">
            <div className="columnBox" >
              Communication
            </div>
            <div className="columnBox" >
              <select>
                <option value="Rate">Rate</option>
                <option value="-1">-1</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="columnBox" >
                    <input
                  type='text'
                  value='Feedback'
                  name='communication'
                  size= '20'
                  onChange={this.myChangeHandler}
                />
            </div>
        </div>
        <div className="rowBox">
            <div className="columnBox" >
              Professionalism
            </div>
            <div className="columnBox" >
              <select>
                <option value="Rate">Rate</option>
                <option value="-1">-1</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="columnBox" >
                    <input
                  type='text'
                  value='Feedback'
                  name='professionalism'
                  size= '20'
                  onChange={this.myChangeHandler}
                />
            </div>
        </div>
        <div className="rowBox">
            <div className="columnBox" >
              Integration
            </div>
            <div className="columnBox" >
              <select>
                <option value="Rate">Rate</option>
                <option value="-1">-1</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="columnBox" >
                    <input
                  type='text'
                  value='Feedback'
                  name='integration'
                  size= '20'
                  onChange={this.myChangeHandler}
                />
            </div>
        </div>
        <div className="" >
                    <textarea
                  rows="12" 
                  cols="63"
                  value='General Feedback'
                  type='textarea'
                  name='feedback'
                  size= '64'
                  onChange={this.myChangeHandler}
                />
        </div>
        <br />
        <a href="#" className="saveButton">Save</a>
        <div className="submitButton">
        </div>
          </form>
        );
      }
}

export default SubmitRating;
