import React, { Component } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
    state = {
        title: 'Sign in'
    }
    render() {
        return (

            <div className='Lform'>

                <div className='loginImage'>
                    <svg width="125" height="78" viewBox="0 0 125 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M36.0777 0C-8.05526 34.8079 -24.4853 69.2645 64.7602 73.9093C87.1963 75.077 107.201 76.1169 125 77.0412V0H36.0777Z" fill="#0094FF" />
                    </svg>
                </div>

                <div className='title'>{this.state.title}</div>

                <div className='loginformwraper'>

                    <form id='loginForm'>
                        <InputBox label='Email' type='email' name='email' />
                        <InputBox label='Password' type='password' name='password' />
                        <a href='#' id='loginLInk'>Forgot password?</a>
                        <button className='loginSignUpBtn'>{this.state.title}</button>
                        <a onClick={()=>{this.props.changeComponent("Signup")}} id='loginLInk'>Create account</a>
                    </form>

                </div>
            </div>


        );
    }
}

class InputBox extends Component {
    render() {
        return (
            <React.Fragment> <label>{this.props.label}</label>
                <input id='loginSignUpInput' type={this.props.type} name={this.props.name} />
            </React.Fragment>

        );
    }
}

export default LoginPage;