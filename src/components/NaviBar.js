import React from 'react'
import Profile from './Profile'
import { NavLink } from 'react-router-dom'
export default function NaviBar() {
    
    return (
        <nav>
            <ul className='navigation-bar'>
                <li className='navbar-item'>
                    <NavLink className='navbar-item' to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li className='navbar-item'>
                    <NavLink className='navbar-item' to='/leaderboard' exact activeClassName='active'>
                        Leaderboard
                    </NavLink>
                </li>
                <li className='navbar-item'>
                <NavLink className='navbar-item' to='/add' exact activeClassName='active'>
                    Add Poll
                    </NavLink>
                </li>
                <li>
                <Profile />
                </li>
            </ul>

        </nav>


    )


}