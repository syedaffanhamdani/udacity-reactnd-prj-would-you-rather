import React from 'react'
import Profile from './Profile'
import { NavLink } from 'react-router-dom'
export default function NaviBar() {
    return (

        <nav>
            <ul className='nav'>
                <li className='nav-li'>
                    <NavLink className='nav-li' to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li className='nav-li'>
                    <NavLink className='nav-li' to='/leaderboard' exact activeClassName='active'>
                        Leaderboard
                    </NavLink>
                </li>
                <li className='nav-li'>
                <NavLink className='nav-li' to='/add' exact activeClassName='active'>
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