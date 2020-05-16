import React, {Component} from 'react'
import NavBar from './NavBar'
import Profile from './Profile'

class Header extends Component{
    render() {
        return(
            <div className='header-bar'>
                <NavBar/>
                <Profile/>
            </div>
        )
    }


}
export default Header;