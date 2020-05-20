import React, {Component} from 'react'
import NaviBar from './NaviBar'
import {connect} from 'react-redux'
import Profile from './Profile'
class Header extends Component {
    render() {
        return(
            <div className='header-bar'>
                <NaviBar/>
                <Profile/>
            </div>
        )
    }


}
export default connect()(Header);