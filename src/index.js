import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './index.css';

import Account from './components/account/account';
import Dashboard from './components/dashboard/Dashboard';

ReactDOM.render(<Router>
  <Switch>
    <Route exact path="/"><Dashboard/></Route>
    <Route path="/account"><Account/></Route>
  </Switch>

</Router>, document.getElementById('root'));
