import React, { Component } from 'react'
import { setAuthenticatedUser } from '../actions/authenticatedUser'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Button from 'react-bootstrap/Button'
class Profile extends Component {

    handleLogout = () => {
        const { setAuthenticatedUser, history } = this.props
        setAuthenticatedUser(null)
        history.push('/')
    }
    render() {
        const { authenticatedUser, profileImage } = this.props
        return (


                    <NavDropdown title="Profile" id="basic-nav-dropdown" className="mr-sm-2">
                        <NavDropdown.Item>
                            <img src={profileImage}
                                alt={`profile pic of ${authenticatedUser}`}>
                            </img> <br />
                    Signed in as: {authenticatedUser}
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            <Button variant="primary" onClick={this.handleLogout}  >Logout</Button>
                        </NavDropdown.Item>
                    </NavDropdown>

        )
    }

}
function mapStateToProps({ authenticatedUser, users }) {
    const profileImage = users[authenticatedUser].avatarURL
    return {
        authenticatedUser,
        profileImage
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setAuthenticatedUser: (id) => {
            dispatch(setAuthenticatedUser(id))
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))