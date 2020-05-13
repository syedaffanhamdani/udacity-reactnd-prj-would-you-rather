import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import { loadInitialUsers } from './actions/actionUtils'
import {connect} from 'react-redux'

class App extends Component {

  componentDidMount() {
    const AUTHENTICATION_ID = null;
    console.log(this.props)
    this.props.dispatch((loadInitialUsers(AUTHENTICATION_ID)))
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Login />

        </header>
      </div>
    );
  }
}

function mapStateToProps ({ authenticatedUser }) {
  return {
    authenticatedUser
  }
}

export default connect(mapStateToProps)(App)
