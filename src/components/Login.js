import React, { Component } from 'react';

class Login extends Component {

    state = {
        selectedUser : '',
    }

    render() {
        const {users} = this.props
    
        return (
            <div className="loginContainer">
            <form id="Login" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <select className="form-control" id="userId">
                        <option>Select User to Login</option>
                        {users && 
                            Object.keys(users).map(
                                user => <option key={user} value={user}>

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

export default Login;