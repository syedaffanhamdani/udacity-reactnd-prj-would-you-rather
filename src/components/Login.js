import React, { Component } from 'react';

class Login extends Component {

    state = {
        selectedUser : '',
    }

    render() {
        return (
            <div className="loginContainer">
            <form id="Login" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <select className="form-control" id="userId">
                        <option>User 1</option>
                        <option>User 2</option>
                        <option>User 3</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary" disabled={this.state.userSelected === ''}>Login</button>
            </form>
            </div>
        );
    }


}

export default Login;