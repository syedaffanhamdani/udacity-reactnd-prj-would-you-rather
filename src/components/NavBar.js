import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
            <div class="nav-wrapper">
                <ul id="nav-mobile" class="right hide-on-med-and-down">
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
                </ul>
            </div>
        </nav>

    )


}