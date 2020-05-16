import React, {Component, Fragment} from 'react'
import {setAuthenticatedUser} from '../actions/authenticatedUser'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
class Profile extends Component {

    handleLogout = () =>{
        const {setAuthenticatedUser, history} = this.props
        setAuthenticatedUser(null)
        history.push('/')
    }
    render () {
        const {authenticatedUser, profileImage} = this.props
        return (
            <Fragment>
                <ul className="navbar-account">
                <button type="submit" onClick={this.handleLogout} className="btn btn-primary" >Logout</button>                    
                <li className="profileImage">
                        <img src={profileImage}
                        alt={`profile pic of ${authenticatedUser}`}>
                        </img>
                    </li>
                    <li className='padding-zero user-name nav-li'>
                        {authenticatedUser}
                    </li>
                </ul>
            </Fragment>
        )
    }

}
function mapStateToProps({authenticatedUser, users}){
    const profileImage = users[authenticatedUser].avatarURL
    return{
        authenticatedUser,
        profileImage
    }
}
function mapDispatchToProps(dispatch) {
    return{
        setAuthenticatedUser: (id)=>{
            dispatch(setAuthenticatedUser(id))
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))