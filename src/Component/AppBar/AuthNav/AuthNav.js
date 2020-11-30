import React from 'react';
import { NavLink } from 'react-router-dom';
import './AuthNav.css'

const AuthNav = () => {
    return (
        <nav>
            <ul className='AuthNav-list'>
                <li className='UserMenu-item'>
                    <NavLink className='AuthNav-link' activeClassName="active-link" to={{
                        pathname: '/login'
                    }}>Login</NavLink>
                </li>
                <li className='UserMenu-item'>
                    <NavLink className='AuthNav-link'
                        activeClassName="active-link"
                        to="/register"
                    >Registration</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default AuthNav;