import React, { Component } from 'react';
import { connect } from 'react-redux'
import {setAuthenticatedUser} from '../actions/authenticatedUser'

class Login extends Component {

    state = {
        selectedUser : '',
    }

    render() {
        const {user} = this.props
        console.log(this.props)
    
        return (
            <div className="loginContainer">
            <form id="Login" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <select className="form-control" id="userId">
                        <option>Select User to Login</option>
                        {user && 
                            Object.keys(user).map(
                                user1 => <option className="hbsc" key={user1} value={user1}>{user1}

                                </option>
                            )
                        }
                    </select>
                </div>

                <button type="submit" className="btn btn-primary" disabled={this.state.userSelected === ''}>Login</button>
            </form>
            </div>
        );
    }


}

function mapStateToProps ({ user }) {
    return {
        user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setAuthenticatedUser: (id) => {
            dispatch(setAuthenticatedUser(id))
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Login);