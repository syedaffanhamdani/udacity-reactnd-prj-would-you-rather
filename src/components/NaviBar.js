import React from 'react'
import  Navbar from 'react-bootstrap/Navbar'
import  Nav from 'react-bootstrap/Nav'
import Profile from './Profile'
export default function NaviBar() {
    return (
    
        <Navbar>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle />
            <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
            <Nav.Link href="/addPoll">Add poll</Nav.Link>

          <Profile/>
        </Navbar>

    )


}