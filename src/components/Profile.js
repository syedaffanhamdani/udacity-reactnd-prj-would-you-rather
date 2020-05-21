import React, { Component } from 'react'
import { setAuthenticatedUser } from '../actions/authenticatedUser'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

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
            <div className="move-right">
                <img src={profileImage} className="profile-picture"
                    alt={`profile pic of ${authenticatedUser}`}>
                </img>
                    Signed in as: {authenticatedUser}
                <Button variant="primary" onClick={this.handleLogout}  >Logout</Button>

            </div>
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