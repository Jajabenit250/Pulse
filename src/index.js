import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

import Account from './components/account/account';
import Dashboard from './components/dashboard/dashboard';

ReactDOM.render(<Router>
  <Switch>
    <Route exact path="/"><Dashboard/></Route>
    <Route path="/account"><Account/></Route>
  </Switch>

</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

ReactDOM.render(<App />, document.getElementById('root'));
