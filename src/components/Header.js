import React, {Component} from 'react'
import NaviBar from './NaviBar'
import {connect} from 'react-redux'
class Header extends Component {
    render() {
        return(
            <div className='header-bar'>
                <NaviBar/>
            </div>
        )
    }


}
export default connect()(Header);