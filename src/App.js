import React, { Component, Fragment } from 'react';
import './App.css';
import Login from './components/Login';
import { loadInitialUsers } from './actions/actionUtils'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import WouldYouRatherDetailsCard from './components/WouldYouRatherDetailsCard';
import Leaderboard from './components/Leaderboard'
import AddQuestion from './components/AddQuestion';
import FourZeroFour from './components/FourZeroFour';
class App extends Component {

  componentDidMount() {
    const AUTHENTICATION_ID = null;
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
                <Route path='/dashboard' exact component={Dashboard}></Route>
                <Route path='/add' exact component={AddQuestion}/>
                <Route path='/leaderboard' exact component={Leaderboard}/>
                <Route path='/questions/:question_id' component={WouldYouRatherDetailsCard} />
              </Fragment>
            }
            <Route component={FourZeroFour} />
          </Switch>

        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authenticatedUser }) {
  console.log(`authenticated user in app.js${authenticatedUser}`)
  return {
    authenticatedUser  
  }
}

export default connect(mapStateToProps)(App)
