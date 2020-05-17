import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setAuthenticatedUser } from '../actions/authenticatedUser'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
class Login extends Component {

    state = {
        selectedUser: '',
    }

    onUserSelected = (selectedUser) => this.setState({ selectedUser })

    handleSubmit = (e) => {
        e.preventDefault()
        const { selectedUser } = this.state
        const { setAuthenticatedUser } = this.props
        if (selectedUser) {
            setAuthenticatedUser(selectedUser)
        }
        else {
            alert('Please select a user to login')
        }
    }

    render() {
        const { users } = this.props
       // const { selectedUser } = this.state

        return (
            <div className="loginContainer">
                <Container className="p-3">
                    <Jumbotron>
                        <h2 className="header">Select a user to login</h2>

                        <form id="Login" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <select className="form-control" id="userId" onChange={(e) => this.onUserSelected(e.target.value)}>
                            <option>Select User to Login</option>
                            {users &&
                                Object.keys(users).map(
                                    user1 => <option className="hbsc" key={user1} value={user1}>{user1}

                                    </option>
                                )
                            }
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={this.state.userSelected === ''}>Login</button>
                </form>
                    </Jumbotron>
                </Container>

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