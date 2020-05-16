import React, { Component, Fragment } from 'react';
import './App.css';
import Login from './components/Login';
import { loadInitialUsers } from './actions/actionUtils'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard'

class App extends Component {

  componentDidMount() {
    const AUTHENTICATION_ID = null;
    console.log(this.props)
    this.props.dispatch((loadInitialUsers(AUTHENTICATION_ID)))
  };

  render() {
    return (
     
      <Router>
        <Fragment>
          <Switch>
            {
              this.props.authenticatedUser === null ? 
              <Route path='/' exact component={Login} />:
              <Fragment>
                <Route path='/' exact component={Dashboard}></Route>
              </Fragment>
            }
          </Switch>

        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authenticatedUser }) {
  return {
    authenticatedUser
  }
}

export default connect(mapStateToProps)(App)
