import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setAuthenticatedUser } from '../actions/authenticatedUser'
import { Redirect } from 'react-router-dom'
class Login extends Component {
    
    constructor() {
        super();
    
        // Define the initial state:
        this.state = {
            selectedUser: '',
        }
      }

     handleSubmit = () => {
        const { selectedUser } = this.state
        const { setAuthenticatedUser } = this.props
        console.log(JSON.stringify(this.state))
        if (selectedUser) {
            setAuthenticatedUser(selectedUser)
        }
        else {
            alert('Please select a user to login')
        }
    }

    onUserSelected = (user) => {
        console.log(`setting state for user${user}`)
        this.setState({ selectedUser : user }, this.handleSubmit)
        }
 

 

    render() {
        const { users } = this.props
        const { selectedUser } = this.state

        return (
            <div className="login-container">
                {selectedUser !== '' ? <Redirect to='/dashboard' /> : 
                <div className="p-3">
                    <h2 className="header">Select a user to login</h2>

                    <form id="Login">
                        <div className="form-group">
                            <select className="form-control" id="userId" onChange={(e) => this.onUserSelected(e.target.value)}>
                                <option>Select User to Login</option>
                                {users &&
                                    Object.keys(users).map(
                                        user => <option className="hbsc" key={user} value={user}>{user}

                                        </option>
                                    )
                                }
                            </select>
                        </div>
                    </form>
                </div>}

            </div>
        );
    }


}

function mapStateToProps({ users }) {
    return {
        users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setAuthenticatedUser: (id) => {
            dispatch(setAuthenticatedUser(id))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Login);