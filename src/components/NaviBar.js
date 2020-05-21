import React from 'react'
import { NavLink } from 'react-router-dom'
export default function NaviBar() {
    
    return (
        <nav>
            <ul className='navigation-bar no-bullets'>
                <li className='navbar-item'>
                    <NavLink className='navbar-item' to='/dashboard' exact activeClassName='active'>
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
                </ul>

        </nav>


    )


}