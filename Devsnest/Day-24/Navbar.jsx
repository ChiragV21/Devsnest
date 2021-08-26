import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="nav">
            <NavLink exact className="active_link" to="/">Home</NavLink>
            <NavLink exact className="active_link" to="/about">About</NavLink>
            <NavLink exact className="active_link" to="/profile">Profile</NavLink>
            <NavLink exact className="active_link" to="/dashboard">Dashboard</NavLink>
        </div>
    )
}

export default Navbar;
