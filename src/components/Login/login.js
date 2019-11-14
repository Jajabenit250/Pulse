import React, { Component } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import bg_tp from '../../images/bg-tp.svg'

class LoginPage extends Component {
    state = {
        title: 'Sign in'
    }
    render() {
        return (

            <div className='Lform'>

                <div className='loginImage'>
                    <img alt="bg-tp" src={bg_tp} />
                </div>

                <div className='title'>{this.state.title}</div>

                <div className='loginformwraper'>

                    <form id='loginForm'>

                        <label>Email</label>
                        <input id='email' className='loginSignUpInput' type="email" name='email' />

                        <label>Password</label>
                        <input id='password' className='loginSignUpInput' type="password" name='password' />

                        <div id='loginLInk'>Forgot password?</div>
                        <Link to="/"><button className='loginSignUpBtn'>{this.state.title}</button></Link>
                        <div onClick={() => { this.props.changeComponent("Signup") }} id='loginLInk'>Create account</div>
                    </form>

                </div>
            </div>


        );
    }
}

export default LoginPage;