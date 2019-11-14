import React, { Component } from 'react';
import Login from './login';
import PulseDesign from './pulseDesign';
import './Login.css';
import Signup from '../signup/Signup';

import { BrowserRouter, Route } from 'react-router-dom';

class SignInSingUpWrapper extends Component {
render() { 
        return (  <BrowserRouter>
                 <div className='wraper'>
              
                  <Route path="/" ><PulseDesign /> </Route>
                 <Route path="/" exact><Login /> </Route>
                 <Route path="/signup"  exact  ><Signup /> </Route>
              {/* 
              NOTE: sign up is commented because doesn't exist
                 */}
                
                      
                         </div>
            </BrowserRouter>
         );
    }
}

export default SignInSingUpWrapper;